---
title: Google Cloud Load Balancing
date: 2022-02-17
last-modified: 2023-10-23
tags:
  - google-cloud
  - networking
---

## Overview

- Software defined
	- No hardware—reacts instantly, handles spikes with no warm-up
- Layer 4 and layer 7
- Integrates with [Cloud CDN](notes/Cloud%20CDN.md)

### Regional Load Balancing

- IPv4
- Health checks
- Session affinity
- Backends in one region
- Compliance use case—traffic stays within region

### Global Load Balancing

- IPv4 and IPv6
- Multi-region failover
- Connects clients to closest region for lower latency
	- Backends distributed across regions

## HTTP(S) Load Balancer

### Backends

| Backend Config  | Content Type | Backend Types                                                                                                                 |
| --------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Backend service | Dynamic      | Unmanaged instance groups<br>Managed instance groups<br>[Network Endpoint Groups](notes/Network%20Endpoint%20Groups.md) |
| Backend bucket  | Static       | [Cloud Storage buckets](notes/Cloud%20Storage.md)                                                                       |

## References

- [Google Cloud Decision Trees](notes/moc/Google%20Cloud%20Decision%20Trees.md)
