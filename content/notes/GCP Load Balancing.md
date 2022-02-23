---
title: "GCP Load Balancing"
date: "2022-02-17"
tags:
- gcp
- networking
---

## Overview

- Software defined
	- No hardware—reacts instantly, handles spikes with no warm-up
- Layer 4 and layer 7
- Integrates with Cloud CDN

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

# References

- [GCP Decision Trees](notes/GCP%20Decision%20Trees.md)
- [GCP Services](notes/GCP%20Services.md)
