---
title: Kubernetes Engine (GKE)
date: 2022-02-16
last-modified: 2023-12-21
tags:
  - google-cloud
  - gke
  - compute
  - kubernetes
---

## Overview

- Managed [Kubernetes](notes/moc/Kubernetes.md) clusters
- Two modes:
	- Standard—total control
	- Autopilot—fully managed
- Auto-repair and upgrade
- [Autoscaling](notes/GKE%20Cluster%20Autoscaling.md)
- Containerize legacy apps and migrate using [Migrate for Anthos and GKE](notes/Migrate%20for%20Anthos%20and%20GKE.md)

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

### GKE Dataplane V2

- Optimized for Kubernetes networking
- Consistent user experience—GKE and [Anthos](notes/Anthos.md)
- Real-time visibility of network activity
- Simpler architecture
- Based on eBPF and [Cilium](notes/Cilium.md)—process network packets in-kernel

#### Advantages

- Security—network policy always on, no need for add-ons e.g. Calico
- Scalability—implemented without kube-proxy, doesn't rely on iptables (eBPF maps instead)
- Operations—network policy logging built in, audit pod communications

#### Architecture

- eBPF
- Kernel programs route/process packets—no need for nernal code change or kernel modules
- No need for iptables—can proces packets based on Kubernetes-specific metadata

## Workload Identity

- Links Kubernetes Service Accounts with Google Cloud Service Accounts—allows access to other Google Cloud resources from within the cluster

## Operations

- Integrated with [Cloud Monitoring](notes/Cloud%20Monitoring.md) and [Cloud Logging](notes/Cloud%20Logging.md)
- Metrics:
	- System metrics—low-level, e.g. CPU, memory
	- Workload metrics—exposed by the workloads in the cluster

## Workload Rightsizing

- Allows applications running in Google Cloud to be optimally sized for CPU and memory
	- Gives recommendations for resource request and limits
- Use to reduce cost, and assess optimization opportunities
- Combine with Autopilot—priced on [Pod](notes/Pod.md) resource requests
	- Changes directly reflected in bill
- Suggestions based on observed usage patterns
- Recommendations presented in Cloud Console—or option to generate Kubernetes YAML manifest
- Metrics exposed in [Cloud Monitoring](notes/Cloud%20Monitoring.md)—used to create custom reports, dashboards, alerts etc.
	- *Recommended per replica request cores*—CPU
	- *Recommended per replica request bytes*—memory
- Memory recommendations not supported for JVM-based workloads
	- Not possible due to JVM heap management

## References

- [Google Cloud Decision Trees](notes/moc/Google%20Cloud%20Decision%20Trees.md)
