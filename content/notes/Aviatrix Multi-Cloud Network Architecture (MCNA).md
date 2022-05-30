---
title: "Aviatrix Multi-Cloud Network Architecture (MCNA)"
date: "2022-05-30"
tags:
- aviatrix
- multi-cloud
---

## Overview

- Avoid vendor lock-in
- 75-90% of enterprises—hybrid/multi-cloud

## Reference Architecture

![aviatrix_mcna](files/aviatrix_mcna.svg)

- Application Layer
	- Application residence
	- VPCs/VNets, VMs, Kubernetes etc.
	- Cloud-vendor native constructs
- Global Transit Layer
	- Network data plane
	- E2E encryption
- Cloud Access Layer
	- Ingress/egress into network
- Cloud Security
	- Enforces security across all the layers and clouds
- Cloud Operations
	- Full visibility
	- Troubleshooting, visibility, automation
