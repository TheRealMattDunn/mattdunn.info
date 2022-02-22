---
title: "Anthos"
date: "2022-02-10"
tags:
- kubernetes
- gke
- gcp
- cloud
---

## Overview

- "Write once, run anywhere"
- [Kubernetes](notes/Kubernetes.md) on GCP, AWS, Azure and on-prem (VMware and bare-metal)
	- Google managed control plane
- Supports:
	- GKE clusters
	- Cloud Run
	- [Compute Engine](notes/Compute%20Engine.md) VMs
- Migrate for Anthos—migrate legacy workloads to containers
- Anthos Config Management
	- Policy enforcement
	- Guardrails
	- Security in depth
- Anthos Service Mesh
	- Managed, observable, secure communications between microservices
	- Istio
	- Control-plane and data-plane
	- Traffic monitored through a proxy—auto-instrumentation/injection, so no code changes required
	- Canary and blue/green deployments
	- Load balancing between services
	- Telemetry
- Cloud Run for Anthos
	- Knative
	- Serverless workloads
	- Advanced autoscaling—scale to zero (or minimum availability)
	- Automatic networking
	- A/B tests—traffic splitting, rollbacks
- Anthos Fleets
	- Groups of clusters
	- Normalisation of resources, e.g.,
		- Namespaces
		- Services
		- Workload Identity
- Binary Authorization
	- Validation policies for container image deployments—CI/CD

## Components

- [GKE](notes/Kubernetes%20Engine.md)
- [Multi Cluster Ingress](notes/Multi%20Cluster%20Ingress.md)

# References

- [Kubernetes](notes/Kubernetes.md)
