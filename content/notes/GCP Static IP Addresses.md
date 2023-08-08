---
title: "GCP Static IP Addresses"
date: "2022-02-21"
tags:
- gcp
- networking
---

## Static External IP Addresses

- No charge for static external IPs—except for IPs reserved but not used

### Regional

- Can attach to zonal and regional resources, e.g.:
	- [Compute Engine VMs](notes/GCP%20Compute%20Engine.md)
	- [Network Load Balancers](notes/GCP%20Load%20Balancing.md)
- Supports IPv4

### Global

- Anycast addresses
- Can attach to global resources only, e.g.:
	- [Global Load Balancers](notes/GCP%20Load%20Balancing.md) (HTTP(S), SSL, TCP proxies)
- Can't assign to regional/zonal resources
- Supports IPv4 and IPv6
