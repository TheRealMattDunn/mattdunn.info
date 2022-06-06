---
title: "Aviatrix"
date: "2022-06-01"
tags:
- moc
- aviatrix
---

## Overview

- Multi-account, multi-region, multi-cloud networking
	- [AWS](notes/AWS.md), [GCP](notes/GCP.md), [Azure](notes/Azure.md), [OCI](notes/Oracle%20Cloud%20Infrastructure%20(OCI).md)
- HA—active-active
- End-to-end encryption—high performance, line speed encryption
- Multi-cloud repeatable architecture
- Multi-cloud network segmentation
	- e.g. communications restricted between segments
- Service insertion and chaining
- Operational visibility
- Secure cloud access
- Secure ingress and egress
- Cloud native

![aviatrix_overview](files/aviatrix_overview.svg)

## Aviatrix Controller

- Unified control plane for Aviatrix Gateways
- Automation and management
- Download from CSP marketplace
- Not SaaS—deployed as a VM
- Deep integration with CSP APIs
- Only 1 need be deployed (not 1 per CSP)
- Deploy in HA
- Multi-account/region aware
- PAYGO or licence models

## Features

### Network Segmentation

![aviatrix_network_segmentation](files/aviatrix_network_segmentation.svg)

- Policy-based—e.g. blue network can't communicate with green
- Multi-cloud aware

### High Performance Encryption (HPE)

![public_cloud_network_trust](files/public_cloud_network_trust.svg)

- Data plane encrypted—line rate performance
- Uses all CPU cores in Aviatrix Gateway for encryption
	- Native solutions usually use 1 core—capped at 1.25Gbps
	- Wasted if line speed is 10Gbps
- Up to 90Gbps VPC to VPC
- Via on-prem hardware appliance—line rate

### FQDN/URL-Based Egress Filtering

#### Problem

- Private workloads require internet access
	- e.g. for patching, Git access, CI/CD etc.
	- Unable to determine what domains are being accessed

#### Native Solutions

- Open up egress to 0.0.0.0/0—insecure, risky
- Filter on IP address (via firewall rule, Security Groups etc.)—cumbersome, destination IPs could change
- NAT gateway—unrestricted
- Squid proxy—hard to manage and scale, requires HA
- L7 firewalls—overkill, expensive, requires HA

#### Aviatrix FQDN Egress Filtering

- Filter on destination hostnames—close egress for other destinations
- Centrally managed
- HA
- Supports wildcards and tags
- Instances in public and private subnets

##### Deployment Options

- Distributed egress:
	- FQDN gateway deployed to every VPC—replaced NAT gateway
- Centralized egress:
	- All egress traffic goes via central VPC containing FQDN gateway

## Ingress Security

- AWS Guard Duty supplies reports to Aviatrix
	- Rules automatically created to block malicious traffic
