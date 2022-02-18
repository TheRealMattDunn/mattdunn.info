---
title: "Google Compute Engine"
date: "2022-02-16"
tags:
- gcp
- compute
---

## Overview

- Highly configurable
- Zonal
- Choice of [machine types:](notes/GCP%20Compute%20Engine%20Machine%20Families.md)
	- General purpose
	- Compute optimized
	- Memory optimized
	- Processor optimized (GPUs)
- Public or private boot disk images

## Preemptible VMs

- Can stop at any time
- Will definitely stop after 24 hrs
- 60 – 90% cheaper than standard VMs

## Sole Tenant Nodes

- Dedicated server
- Useful for specific hardware requirements, e.g., for bring your own licence (BYOL) requirements—per processor/core licencing

## Managed Instance Groups (MIGs)

- Multiple identical VMs managed together
- Autoscaling
- Auto-healing
- Regional/multi-zonal
- Unmanaged Instance Groups:
	- Load balance against any group of VMs

## Images

### Custom Images

- Created from: source disks, images, snapshots, images stored in [Cloud Storage](notes/Google%20Cloud%20Storage.md)
- Used to create VM instances
- Virtual disk import tool: import boot disk images from existing systems
- Stored in [Cloud Storage](notes/Google%20Cloud%20Storage.md)—zonal or regional
- Can group into families
- Image status:
	- ACTIVE—image can be used as normal
	- DEPRECATED—can still be used, but marked as deprecated
	- OBSOLETE—can no longer be used
	- DELETED—can no longer be used

## References

- [GCP Compute Services](notes/GCP%20Compute%20Services.md)
