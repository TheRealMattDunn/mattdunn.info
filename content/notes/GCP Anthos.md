---
title: "GCP Anthos"
date: "2022-02-10"
tags:
- kubernetes
- gke
- anthos
- gcp
- cloud
---

## Overview

![anthos_components](files/anthos_components.svg)

- "Write once, run anywhere"
- [Kubernetes](notes/moc/Kubernetes.md) on GCP, AWS, Azure and on-prem (VMware and [bare metal](notes/Anthos%20on%20Bare%20Metal.md))
	- Google managed control plane
- Supports:
	- [Kubernetes Engine clusters](notes/GCP%20Kubernetes%20Engine%20(GKE).md)
	- [Cloud Run](notes/GCP%20Cloud%20Run.md)
	- [Compute Engine](notes/GCP%20Compute%20Engine.md) VMs
- [Migrate for Anthos and GKE](notes/Migrate%20for%20Anthos%20and%20GKE.md)—migrate legacy workloads to containers
- Anthos Config Management
	- Policy enforcement
	- Guardrails
	- Security in depth
- Anthos Service Mesh
	- Managed, observable, secure communications between [microservices](notes/Microservices.md)
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
	- Normalisation of resources, e.g.
		- Namespaces
		- Services
		- Workload Identity
- Binary Authorization
	- Validation policies for container image deployments—CI/CD

## Components

- [GKE](notes/GCP%20Kubernetes%20Engine%20(GKE).md)
- [Multi Cluster Ingress](notes/Multi%20Cluster%20Ingress.md)
- [Migrate for Anthos and GKE](notes/Migrate%20for%20Anthos%20and%20GKE.md)

## Attached Clusters

- Extend Anthos into Kubernetes clusters running in other environments
- Single pane of glass view of all clusters
- Supports Amazon EKS and Azure AKS
- Support for ACM and ASM
- Install agent in cluster
- Ability to see workloads in console UI

## Supported Versions

- Versions indicated by [semver](https://semver.org/) numbering: x.y.z
- Quarterly major/minor releases
- Monthly path releases
- Google support previous n–2 releases
