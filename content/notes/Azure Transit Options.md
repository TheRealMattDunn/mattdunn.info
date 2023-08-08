---
title: "Azure Transit Options"
date: "2022-05-30"
tags:
- azure
---

## ExpressRoute Edge Router

- Hair-pinning via ExpressRoute Edge Router
- Common solution—many limitations

## Network Virtual Appliance (NVA)

- NVA (e.g. firewall) deployed in [VNets](notes/Azure%20Virtual%20Networks%20(VNets).md) and used as transit solution
- Not scalable—requires manual work

## VNet Peering

- Microsoft preferred option
- Not-transitive—full mesh required for any-to-any communication
- Management overhead

## Azure Virtual WAN

- Microsoft's solution for limitations of other options
- Drawbacks:
	- Not multi-cloud friendly
	- Must buy all features
	- Hub doesn't support third-party devices
	- Limited visibility and troubleshooting
	- No control over routing policy
	- 200 BGP route limit from Azure to on-prem
