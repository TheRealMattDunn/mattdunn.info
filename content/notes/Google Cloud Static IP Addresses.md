---
title: Google Cloud Static IP Addresses
date: 2022-02-21
last-modified: 2023-10-23
tags:
  - google-cloud
  - networking
---

## Static External IP Addresses

- No charge for static external IPs—except for IPs reserved but not used

### Regional

- Can attach to zonal and regional resources, e.g.:
	- [Compute Engine VMs](notes/Compute%20Engine.md)
	- [Network Load Balancers](notes/Google%20Cloud%20Load%20Balancing.md)
- Supports IPv4

### Global

- Anycast addresses
- Can attach to global resources only, e.g.:
	- [Global Load Balancers](notes/Google%20Cloud%20Load%20Balancing.md) (HTTP(S), SSL, TCP proxies)
- Can't assign to regional/zonal resources
- Supports IPv4 and IPv6
