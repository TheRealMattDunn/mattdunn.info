---
title: Platform9 Managed Kubernetes
date: 2022-06-08
last-modified: 2024-03-25
tags:
  - kubernetes
  - cloud
---

## Overview

- PMK
- SaaS
- On-prem, public cloud, edge
- 99.9% SLA—across all deplopyment targets, including public cloud
- Deploy < 5 min
- Scale on demand
- Remote 24/7 monitoring—troubleshoot and repair

### Tech Stack

- Load balancer—MetalLB
- Monitoring—Prometheus, Fluentd
- etcd—optional backups
- Multi-tenancy—implemented via Keystone
- Knative—self install
- Istio—self install
- Multi-cluster ingress—self install (CloudFlare suggested)

## Deployment Targets

### BareOS

- Physical/VMs with supported Linux version
	- Not VMware—pre-built image available
- Networking not managed by PMK

### [AWS](notes/moc/AWS.md) And [Azure](notes/moc/Azure.md)

- Native PMK clusters—running on EC2/VMs
- EKS/AKS cluster import—subset of features
- Native—can set up VPC, subnets, Security Groups etc. or bring your own VPC
- ELB
- Cluster autoscaling
- Fully automated rolling upgrades
- Centralised deployment UI/API/TF provider

### [Google Cloud](notes/moc/Google%20Cloud.md)

- No native clusters—import GKE clusters only
- Cluster must have public API endpoint and public VPC
- Limitations: No cluster lifecycle management from PMK (delete, upgrade, scale)
	- Monitoring only

## Profile Engine

- Similar to [GKE Enterprise](notes/GKE%20Enterprise.md) Config Management
- Cluster governance/policy management—RBAC only
- Drift detection

## Monitoring

- Prometheus, Grafana
- PMK monitoring dashboard
- Alerts
