---
title: Compute Engine Local SSDs
date: 2022-02-18
last-modified: 2023-12-21
tags:
  - google-cloud
  - data
  - storage
---

## Overview

- Fastest block storage solution
- Attached directly to [Compute Engine](notes/Compute%20Engine.md) VMs
- Zonal
- 375 GB disks
	- Expandable to 3, 6 or 9 TBs—combined into a single logical volume
	- IOPs increase with disk size
- Data encrypted at rest
- Data lost when VM stops
	- Best for transient data—media rendering, caches, analytics
	- Can survive live migration

## References

- [Google Cloud Decision Trees](notes/moc/Google%20Cloud%20Decision%20Trees.md)
