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

### Global Lad Balancing

- IPv4 and IPv6
- Multi-region failover
- Connects clients to closest region for lower latency
	- Backends distributed across regions

## Load Balancing Decision Trees

### External

![External load balancing decision tree](/files/gcp_external_load_balancing_decision_tree.svg)

### Internal

![Internal load balancing decision tree](/files/gcp_internal_load_balancing_decision_tree.svg)

# References

- [GCP Services](notes/GCP%20Services.md)
