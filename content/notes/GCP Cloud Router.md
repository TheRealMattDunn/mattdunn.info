---
title: "GCP Cloud Router"
date: "2022-02-22"
tags:
- gcp
- networking
---

## Overview

- Dynamic routing
- Supports:
	- [Cloud VPN](notes/GCP%20Cloud%20VPN.md)
	- [Dedicated Interconnect](notes/GCP%20Cloud%20Interconnect.md)
- Links external network to [VPC](notes/GCP%20VPCs.md) via BGP
- Automatically learns subnets in VPC—announces to on-prem network
- Works with router appliances for high performance
