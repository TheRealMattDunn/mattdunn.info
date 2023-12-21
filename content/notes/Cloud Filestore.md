---
title: Cloud Filestore
date: 2022-02-18
last-modified: 2023-12-21
tags:
  - google-cloud
  - storage
  - data
---

## Overview

- File-based storage
	- NAS
- Provision in zone—access via VPC using NFSv3
- Use case: lift-and-shift migrations
- Read-only snapshots supported

### Tiers

| Tier       | Capacities                              | Use cases                               |
| ---------- | --------------------------------------- | --------------------------------------- |
| Basic      | HDD: 1 – 63.9 TiB / SSD: 2.5 – 63.9 TiB | File sharing, dev, web hosting          |
| Enterprise | 1 – 10 TiB                              | Critical apps, GCE and GKE              |
| High-scale | 10 – 100 TiB                            | High performance e.g. genome sequencing |

## References

- [Google Cloud Decision Trees](notes/moc/Google%20Cloud%20Decision%20Trees.md)
