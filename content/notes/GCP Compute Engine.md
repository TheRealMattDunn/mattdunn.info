---
title: GCP Compute Engine
date: 2022-02-16
tags:
  - gcp
  - compute
last-modified: 2023-08-18
---

## Overview

- Highly configurable
- Zonal
- Choice of machine types:
	- General purpose
	- Compute optimized
	- Memory optimized
	- Processor optimized (GPUs)
- Public or private boot disk images
- Live migrations
- Auto restart
- Per second billing—minimum of one minute
	- vCPU and memory billed separately

## Boot Disks

- Set `--no-boot-disk-auto-delete` to keep boot disk data after instance deletion

## Preemptible VMs

- Can stop at any time
- Will definitely stop after 24 hrs
- 60 – 90% cheaper than standard VMs

## Sole Tenant Nodes

- Dedicated server
- Useful for specific hardware requirements, e.g. for bring your own licence (BYOL) requirements—per processor/core licencing

## Managed Instance Groups (MIGs)

- Multiple identical VMs managed together
- Autoscaling
- Auto-healing
- Regional/multi-zonal
- Unmanaged Instance Groups:
	- Load balance against any group of VMs

## Machine Families

## Use Cases

| Family                         | Use case                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| General purpose (E2/N2/N2D/N1) | Balanced performance and cost                                                              |
| Compute optimized (C2/C2D)     | High-performance, CPU frequency and consistency, powerful cores, high CPU/mem ratios       |
| Memory optimized (M1/M2)       | High memory requirements                                                                   |
| Accelerator optimized (A2)     | Highest performance GPUs for [ML](notes/Machine%20Learning.md), HPC and parallel computing | 
| Scale-out optimized (Tau T2D)  | Horizontally scalable [cloud native](notes/The%20Path%20to%20Cloud%20Native.md) workloads  |

## GPUs

- GPUs supported on:
	- N1
	- A2

## Images

### Custom Images

- Created from: source disks, images, snapshots, images stored in [Cloud Storage](notes/GCP%20Cloud%20Storage.md)
- Used to create VM instances
- Virtual disk import tool: import boot disk images from existing systems
- Stored in [Cloud Storage](notes/GCP%20Cloud%20Storage.md)—zonal or regional
- Can group into families
- Image status:
	- ACTIVE—image can be used as normal
	- DEPRECATED—can still be used, but marked as deprecated
	- OBSOLETE—can no longer be used
	- DELETED—can no longer be used

# References

- [GCP Decision Trees](notes/moc/GCP%20Decision%20Trees.md)
