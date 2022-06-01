---
title: "OCI Virtual Cloud Networks (VCNs)"
date: "2022-05-31"
tags:
- oci
- networking
---

## Overview

- VCNs regional
- Subnets—can be regional, or scoped to individual Availability Domains (ADs)

### Example

![oci_vcn_example](files/oci_vcn_example.svg)

## Firewalls

### Security Lists

- *Legacy*
- Virtual firewalls for compute instances
- Set of ingress and egress rules applied to all VNICs in a subnet

### Network Security Groups (NSGs)

- More granular configuration than Security Lists
- Applied to specific VNICs—firewall rules apply only to resources within NSG

## Gateways

- Dynamic Routing Gateway
	- Transit hub entity
	- Interconnect VCNs within a region
	- Terminates IPSec VPNs and FastConnect circuits
- Service Gateway
	- Allows access to supported Oracle services in the same region as the VCN
- Internet Gateway
	- Provides a path for the network traffic between the VCN and the internet
- NAT Gateways
	- Allows resources in private subnets to access the internet

### Dynamic Routing Gateway (DRG)

- Hub gateway—up to 300 attachments
- Four attachment types:
	- VCN attachments
	- Remote Peering Connection (RPC) attachments (DRG peering)
	- IPSec attachments
	- FastConnect attachments

## FastConnect

- Private circuit connection to on-prem
- Two types:
	- Private peering—access to VCN resources using private IPs
	- Public peering—access to public OCI services or public IPs in public subnets
