---
title: "AWS Outposts"
date: "2022-04-29"
tags:
- aws
- hybrid cloud
---

## Overview

![outposts](files/outposts.svg)

- Extend AWS infrastructure to on-prem
- Rack
- Fully-managed by AWS

## Available Functionality

### Compute

- [ECS](notes/AWS%20Elastic%20Container%20Service%20(ECS).md)
- EKS
- EC2

### Block and Object Storage

- S3
- EBS
- EBS Local Snapshots

### Data

- RDS
- Elasticache
- EMR

### Networking

- Application Load Balancer (ALB)

## Outposts Server

![outposts_server](files/outposts_server.svg)

- Use case: when full Outposts rack not required
	- 1U and 2U servers
- Small workloads, e.g. shops, kiosks, bank branches
- Use-case: manufacturing
	- Facilities often in locations where land is cheap—bad connectivity, low bandwidh, high jitter
