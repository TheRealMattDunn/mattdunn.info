---
title: "Aviatrix Integrated Firewall"
date: "2022-06-09"
tags:
- aviatrix
- multicloud
- networking
- security
---

## Problem Statement

- Intra-VPC traffic—best handled by L4 Security Groups/Firewalls
	- Can be provisioned by automation
- Inter-VPC traffic—best architecture is centralized L4 transit firewall
	- Or L7 NGFW—only if required: expensive
- Solution: insert firewalls in transit layer

## Aviatrix Integrated Firewall

- Best suited for small scale environments
- No requirement for NGFWs—use [Aviatrix Transit FireNet](notes/Aviatrix%20Transit%20FireNet.md) otherwise
- Placed in transit layer
- Rules managed by [Aviatrix Controller](notes/Aviatrix%20Controller.md)
- North+South, East+West, Ingress+Egress traffic
- Dev team manage L4 Seurity Group/Firewall rules; NetSec manage transit traffic
- Multicloud
- No additional components required
