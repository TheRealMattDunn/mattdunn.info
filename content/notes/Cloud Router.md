---
title: Cloud Router
date: 2022-02-22
last-modified: 2023-10-23
tags:
  - google-cloud
  - networking
---

## Overview

- Dynamic routing
- Supports:
	- [Cloud VPN](notes/Cloud%20VPN.md)
	- [Dedicated Interconnect](notes/Cloud%20Interconnect.md)
- Links external network to [VPC](notes/Google%20Cloud%20VPCs.md) via BGP
- Automatically learns subnets in VPC—announces to on-prem network
- Works with router appliances for high performance
