---
title: Compute Engine Persistent Disks
date: 2022-02-18
last-modified: 2023-10-23
tags:
  - google-cloud
  - storage
  - data
---

## Overview

- Disks independent of [Compute Engine](notes/Compute%20Engine.md) instance
- Data available after VM is shutdown
- Durable—data distributed across physical disks (99.9999%)
- Secure—encrypted at rest and transit
- Can attach to multiple Compute Engine instances in read-only mode

### Zonal Vs Regional Persistent Disks

| Zonal                                    | Regional                 |
| ---------------------------------------- | ------------------------ |
| Single Zone                              | Two zones in same region |
| Standard, balanced, SSD, extreme         | Standard, balanced, SSD  |
| Snapshots and boot disks                 | Snapshots only           |
| Can resize capacity, throughput and IOPs | Can resize capacity only |

## References

- [Google Cloud Decision Trees](notes/moc/Google%20Cloud%20Decision%20Trees.md)
