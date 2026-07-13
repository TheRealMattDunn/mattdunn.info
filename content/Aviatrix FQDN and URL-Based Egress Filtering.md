---
title: "Aviatrix URL-Based Egress Filtering"
date: "2022-06-08"
tags:
- aviatrix
- multicloud
- networking
---

## Overview

### Problem

- Private workloads require internet access
	- e.g. for patching, Git access, CI/CD etc.
	- Unable to determine what domains are being accessed

### Native Solutions

- Open up egress to 0.0.0.0/0—insecure, risky
- Filter on IP address (via firewall rule, Security Groups etc.)—cumbersome, destination IPs could change
- NAT gateway—unrestricted
- Squid proxy—hard to manage and scale, requires HA
- L7 firewalls—overkill, expensive, requires HA

### Aviatrix FQDN Egress Filtering

- Filter on destination hostnames—close egress for other destinations
- Centrally managed
- HA
- Supports wildcards and tags
- Instances in public and private subnets

#### Deployment Options

- Distributed egress:
	- FQDN gateway deployed to every VPC—replaced NAT gateway
- Centralized egress:
	- All egress traffic goes via central VPC containing FQDN gateway
