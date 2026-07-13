---
title: GKE Multi-Tenancy
date: 2024-03-25
last-modified: 2024-03-26
tags:
  - google-cloud
  - gke
  - kubernetes
---

## Introduction

- Best practices for [GKE](notes/Kubernetes%20Engine%20(GKE).md) multi-tenancy with enterprise organisations
- Assume teams deploy workloads through [Kubernetes](notes/moc/Kubernetes.md) API without platform team's input
- Definitions of a tenant:
	- Team responsible for 1+ workloads
	- Set of related workloads
	- Single workload

## Networking

![](files/gke_multi_tenancy.png)

- Shared VPC for each cluster/environment
	- In Cluster Networking folder
	- Managed by central networking team
- Tenant shared VPC per environment
	- Non-cluster resources

## HA and Reliability

- One cluster admin per project
	- Prevents misconfigurations affecting all clusters
- [Private clusters](notes/Kubernetes%20Engine%20(GKE).md#clusters)
	- Disable access to nodes and manage control plane access
- Regional clusters—control plane and nodes
- Utilise [autoscaling](notes/GKE%20Cluster%20Autoscaling.md)
	- [HorizontalPodAutoscaler (HPA)](notes/HorizontalPodAutoscaler.md)
	- VerticalPodAutoscaler available—can compete with HPA, so start with HPA
- Schedule maintenance windows
- Set up shared [Ingress](notes/Ingress.md)/[load balancer](notes/Google%20Cloud%20Load%20Balancing.md)

## Security

- Network polices
	- `deny-all` for cross-namespace traffic by default
- GKE Sandbox
	- User-space kernel
	- Stops malicious tenants from affecting others
- Policy-based admission controls
	- Prevent pods violating security policies
	- Options:
		- Gatekeeper OPA—requires [GKE Enterprise](notes/GKE%20Enterprise.md)
		- PodSecurity admission controller
- [Workload Identity Federation](notes/Workload%20Identity%20Federation.md) for GKE
	- Access to GCP services
	- Map Kubernetes service accounts names to virtual [Google Cloud](notes/moc/Google%20Cloud.md) service account handles—assign IAM roles
- Authorized Networks
	- Restrict IPs which have access to control plane

## Provisioning

- Namespace per tenant
	- Tenant admin manages users with namespace
	- Standardise namespace names—across environments to make config easier, CI/CD scripts etc.
- Project per tenant for non-cluster resources
	- Including logs, monitoring, service accounts etc.
- Kubernetes RBAC—fine-grained access to namespaces
	- Bind to Google Groups
- Create tenant-specific service account for each workload
	- Security
	- Map to Kubernetes service accounts via Workload Identity Federation
- Create resource quota per namespace—CPU and memory

## Monitoring, Logging and Usage

- GKE Cost Allocation
	- Cost breakdown by namespace and label
	- Not supported by [Autopilot](notes/Kubernetes%20Engine%20(GKE).md#autopilot)
- Tenant-specific logs
	- Log Router—sink to export to log bucket in tenant projects

## References

- [Best practices](https://cloud.google.com/kubernetes-engine/docs/best-practices/enterprise-multitenancy)
- [Setup checklist](https://cloud.google.com/kubernetes-engine/docs/best-practices/enterprise-multitenancy#checklist)