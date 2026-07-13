---
title: "AWS Transit Gateway (TGW)"
date: "2022-05-27"
tags:
- aws
- networking
---

## Overview

![transit_gateway](files/transit_gateway.svg)

- Hub and spoke connectivity for VPCs
- Default any-to-any communication
- Need to manage:
	- VPC route tables
	- TGW route tables
	- VPC attachments
	- Route table associations
	- Route propagation

### Challenges

- 20 CIDR limit to advertise to on-prem DC
- 100 CIDR limit to advertise to on-prem AWS from on-prem
- Manual route table management
- No intra-region TGW peering
- Limited to inter-region peering support
	- Each region—island
- No overlapping CIDR support
- Limited visibility
	- No ping, traceroute, telnet etc.
	- No visibility of other networking constructs
