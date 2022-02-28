---
title: "GCP VPCs"
date: "2022-02-21"
tags:
- gcp
- networking
---

## Overview

- Global
	- Single VPC for multiple regions
	- No traffic across public internet
- IPv4, unicast
- Software defined—instant updates
- Automatic or custom modes, for creation of:
	- Subnets
	- Firewall rules
	- Routes
- VPCs—global
- Subnets—regional, can span multiple zones within a region
- Options:
	- Shared VPC
	- VPC peering—services available across different VPCs in different orgs and projects
	- Bring-your-own IPs
	- Packet mirroring—traffic analysis in Monitoring

## VPC Peering

- Transitive peering not allowed—resources in VPC A, peered with VPC B, can't access resources in other VPCs also peered with B:

![gcp_vpc_peering](/files/gcp_vpc_peering.svg)

# References

- [GCP Services](notes/GCP%20Services.md)
