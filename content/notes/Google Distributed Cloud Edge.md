---
title: "Google Distributed Cloud Edge"
date: "2022-06-21"
tags:
- hybrid cloud
- kubernetes
- edge
---

## Overview

- Run [Kubernetes](notes/Kubernetes.md) clusters on-prem on dedicated hardware provided and maintained by Google
	- Google engineers require physical access
- Deploy workloads like in [GKE](notes/GCP%20Kubernetes%20Engine%20(GKE).md)
- Provision new clusters in Cloud Console, CLI and API—similar to GKE
- Clusters can access [VPC](notes/GCP%20VPCs.md) via [loud VPN](notes/GCP%20Cloud%20VPN.md)

### Use Cases

 - Stable network connection required between Kubernetes workloads and on-prem
 - Low latency to on-prem required
 - Large data volumes—cost/performance prohibitive on GCP
 - Regulatory/data sovereignty reasons

### Limitations

- Limited processing capacity
- Workload restrictions
- [Anthos Service Mesh](notes/GCP%20Anthos.md) and Anthos Config Management not supported

## Architecture

- Rack of hardware—Distributed Cloud Edge Zone (GDC Edge Zone)
- Kubernetes control plane runs in GCP region
	- GDC Edge Zone required constant Internet communication
	- Remotely managed—e.g. software updates, resolve config issues
- GDC Edge Zone contains Nodes, grouped into Node Pools

### Hardware

![gdce_hardware](files/gdce_hardware.svg)

- Customer/colo manages local network and edge routers
- Storage: 4 TiB per physical machine
	- Ephemeral data only
	- Presented to cluster as PersistentVolumes

### Kubernetes

![gdce_k8s](files/gdce_k8s.svg)

- Kubernetes control plane resides in GCP
	- Doesn't use compute capacity of GDC Edge Zone

## Pricing

- ~£12,000/month per cluster
- Each cluster contains:
	- 6x Server-C
		- 256 GB RAM
		- 4 TiB storage

## Availability

- No [SLA](notes/SLIs,%20SLOs%20and%20SLAs.md)—only SLO
- SLO proportional to spare compute capacity
	- Workloads automatically moved to spare capacity in case of node failure
	- Implement with node taints or reserved node capacity constraints

| Capacity in use | Reserved capacity | SLO    |
| --------------- | ----------------- | ------ |
| 66.67%          | 33.33%            | 99.99% |
| 83.99 %         | 16.67%            | 99.9%  |
| 100%            | 0%                | 93.5%  |

- Upon hardware failure—Google engineer schedules site visit within three working days

## Maintenance Windows

- Updates mandatory—no opt-out
- Can specify window for each cluster
- Best practice—stagger windows for clusters
	- Ensures HA of critical workloads
