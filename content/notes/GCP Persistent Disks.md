---
title: "GCP Persistent Disks"
date: "2022-02-18"
tags:
- gcp
- storage
- data
---

## Overview

- Disks independent of [Compute Engine](notes/Google%20Compute%20Engine.md) instance
- Data available ofter VM is shutdown
- Durable—data distributed across physical disks (99.9999%)
- Secure—encrypted at rest and transit

### Zonal Vs Regional Persistent Disks

| Zonal                                    | Regional                 |
| ---------------------------------------- | ------------------------ |
| Single Zone                              | Two zones in same region |
| Standard, balanced, SSD, extreme         | Standard, balanced, SSD  |
| Snapshots and boot disks                 | Snapshots only           |
| Can resize capacity, throughput and IOPs | Can resize capacity only |

# References

- [GCP Object and File Storage](notes/GCP%20Object%20and%20File%20Storage.md)
