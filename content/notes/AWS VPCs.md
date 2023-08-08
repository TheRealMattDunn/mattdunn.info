---
title: "AWS VPCs"
date: "2022-05-27"
tags:
- aws
- networking
---

## Example VPC Architecture

![aws_networking](files/aws_networking.svg)

## Gateways

- Internet Gateway (IGW)—allows internet access from a VPC
- NAT Gateway (NATGW)—provides internet access to EC2 instances in private subnets, outbound only
- [Transit Gateway (TGW)](notes/AWS%20Transit%20Gateway%20(TGW).md)—Provides hub and spoke connectivity for VPCs
- Virtual Private Gateway (VGW)—Connects site-to-site VPN tunnels to a VPC
- Direct Connect Gateway (DXGW)—Connect global VPCs to Direct Connect
- Customer Gateway (CGW)—On-prem router equipment, connects with VGW, TGW or DXGW

## VPC Peering

- VPC-to-VPC communication
- Non-transitive
	- Full mesh required for any-to-any connectivity
- Downsides:
	- Difficult to manage firewall
	- Unmanageable at high scale—125 peer limit

![vpc_peering](files/vpc_peering.svg)
