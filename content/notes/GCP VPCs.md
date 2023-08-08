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
	- 5 free VPCs per project—can create more, but are chargeable
- Subnets—regional, can span multiple zones within a region
- Options:
	- Shared VPC
	- VPC peering—services available across different VPCs in different orgs and projects
	- Bring-your-own IPs
	- Packet mirroring—traffic analysis in Monitoring

## VPC Network Modes

- Default
	- One subnet per region
	- Default firewall rules
- Auto mode
	- Default network
	- One subnet per region—fixed /20 subnets (expandable to /16)
	- Regional IP allocation
- Custom mode
	- No default subnets created
	- Full control of IP ranges
	- Regional IP allocation
	- Expandable to any RFC 1918 size

## VPC Peering

- Transitive peering not allowed—resources in VPC A, peered with VPC B, can't access resources in other VPCs also peered with B:

![gcp_vpc_peering](files/gcp_vpc_peering.svg)

## Shared VPCs

- VPC shared with child *service* projects from central VPC *host* project—hub and spoke networking model
- Compute Shared VPC Admin role (`roles/compute.xpnAdmin`)—user can view all VPC networks/subnets in service project, regardless of whether all subnets have been shared

## Global VPC Pros and Cons

### Pros

- Single VPC for multiple regions
- No traffic across public internet
- Global separation of resources without the need to set up routes or peering

### Cons

- Large blast radius—all subnets routable within VPC
- No policy-based segmentation within VPC—manually create L4 stateful firewall rules
- GCFW service insertion not possible—next hop for VPC subnet route cannot be modified
- Encryption within VPC—best effort
- Not a multi-cloud design—doesn't match the model of other cloud providers
