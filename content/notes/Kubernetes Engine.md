---
title: "Kubernetes Engine"
date: "2022-02-16"
tags:
- gcp
- gke
- compute
- kubernetes
---

# Overview

- Two modes:
	- Standard—total control
	- Autopilot—fully managed
- Auto-repair and upgrade
- [Autoscaling](notes/GKE%20Cluster%20Autoscaling.md)

## Clusters

- At least one control plane and multiple worker nodes
	- Zonal—one control plane node
	- Regional—multiple control plane nodes
- Can't switch from regional to zonal (or vice versa) once cluster is created
- Private clusters—VPC native, internal IPs only
- For HA use multi-zonal node pools

## Networking

- Routing options:
	- Routes-based
		- Custom static routes
	- VPC-native
		- Alias IP ranges
		- Scale better
		- Needed for private clusters
		- [Pods](notes/Pod.md) routable within cluster's VPC, and other networks connected via VPC peering
			- Also generally routable from on-prem via VPN/Interconnect
		- Pod IP addresses reserved before Pods created in the cluster—prevents conflicts
		- Don't consume custom routes quota
		- Can apply firewall rules to Pod IPs

## Workload Identity

- Links Kubernetes Service Accounts with GCP Service Accounts—allows access to other GCP resources from within the cluster

## Operations

- Integrated with Cloud Monitoring and Logging
- Metrics:
	- System metrics—low-level, e.g., CPU, memory
	- Workload metrics—exposed by the workloads in the cluster

# References

- [GCP Compute Services](notes/GCP%20Compute%20Services.md)
- [Kubernetes](notes/Kubernetes.md)
