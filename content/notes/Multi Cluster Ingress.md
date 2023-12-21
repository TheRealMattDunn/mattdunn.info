---
title: Multi Cluster Ingress
date: 2022-02-10
last-modified: 2023-12-21
tags:
  - google-cloud
  - anthos
  - gke
  - kubernetes
---

## Overview

Google hosted service to load balance requests across [Kubernetes Engine](notes/Kubernetes%20Engine%20(GKE).md) clusters and regions. The MultiClusterIngress [Kubernetes](notes/moc/Kubernetes.md) resource is a controller for [External HTTP(S) Load Balancers](notes/Google%20Cloud%20Load%20Balancing.md).

### Multi Cluster Use Cases

- Close user proximity to workloads
- High availability
- Security and organizational separation
- Cluster migration
- Data locality

### Multi Cluster Ingress Use Cases

- Single (global) VIP for an application
- Multi cluster/regional availability
	- Health checks
	- Failover
- Proximity-based routing
	- Via anycast VIPs
	- Low client latency
- Transparent cluster migration for upgrades/rebuilds
	- Blue/green deployments

## Requirements

- HttpLoadBalancing add-on enabled (default)
- VPC-native clusters
- Workload Identity enabled

## Limitations

- External HTTP(s) Load Balancers only
- Only works with clusters within the same project, and only one Multi Cluster Ingress per project
	- Can select a subset of clusters however
- HTTPS requires a pre-allocated static IP (not ephemeral)
- Quotas (can request increase):
	- 15 clusters per project
	- 50 MultiClusterIngress resources per cluster
	- 100 MultiClusterService resources per cluster

## How it Works

- HTTP(S) Load Balancer created on the premium tier
	- Globally distributed with 100+ points of presence (PoPs) hosting Google Front Ends (GFEs)
	- Global external IP advertised via anycast
	- Requests served by GFEs go to the closest cluster via Google backbone
- Multi Cluster Ingress Controller
	- Google managed
	- Programs external HTTP(S) Load Balancer using [Network Endpoint Groups](notes/Network%20Endpoint%20Groups.md)
	- Configures [Pods](notes/Pod.md) across clusters as backends
	- NEGs track Pod endpoints dynamically
		- LB has correct set of healthy backends
	- Ensures the LB is in sync with Deployments etc.
	- Respects Pod health checks
	- Determines if clusters are removed from pool

## Architecture

![Multi Cluster Ingress architecture](files/multi_cluster_ingress_architecture.svg)

## MultiClusterService and MultiClusterIngress Resources

- Only present in the config cluster

### MultiClusterService

- Similar to Service but behaves differently
- Generates Services in the target fleet clusters
	- These create NEGs to track target Pods

### MultiClusterIngress

- Behaves similarly to regular [Ingress](notes/Ingress.md)
	- Similar spec
- Targets MultiClusterService resources rather than Services

## Namespaces

- Namespace sameness across fleet
	- MCI can target Pods in namespace across all clusters
	- Teams need to reserve namespaces to ensure no mismatch
- All namespaces need to be created in the config cluster
	- MultiClusterServices and MultiClusterIngresses are deployed into a namespace, and can only target pods in the same namespace

## Config Cluster Design

- Single cluster
	- Must be HA (regional)
	- Can't access API to update MultiClusterService or MultiClusterIngress resources if down
- Doesn't have to be dedicated
	- But maybe it should be? Prevents CPU/Mem contention, and provides isolation
- Can change which cluster is the current config cluster (e.g. for maintenance)
	- Need to ensure MultiClusterService and MultiClusterIngress resources are identical when switching
	- Pattern: blue/green cluster updates
		- CI/CD applies MultiClusterService and MultiClusterIngress resources to both blue and green clusters
		- Seamless switch-over
