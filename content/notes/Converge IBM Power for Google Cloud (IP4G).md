---
title: "Converge IBM Power for Google Cloud (IP4G)"
date: "2022-06-07"
tags:
- ibm
- power
- gcp
---

## Overview

- Offered by Converge; previously owned by IBM
- IaaS for IBM PowerVM based virtual machines (LPARs)
- Integrated offering
	- Consume 3rd party service (i.e. IBM Power) as though GCP native
	- 4 areas:
		- Billing—integrated through GCP marketplace
		- User experience—like interacting with Google infrastructure
		- Networking—low latency, HA, secure connection to Converge infrastructure (never over internet, private IP space)
		- Support—tier 1 support from Google, with escalation to Converge (critical workloads)
- Converge runs infrastructure—customer responsible for OS upwards
- Monthly subscription
	- T-shirt sizing—can change plans
	- Billing prorated for partial months
- Access to GCP services from within LPARs
- Power9-based servers
	- Same infra as used in usual on-prem deployments—by design

### Management

- OpenAPI interface—running on GKE in Converge-owned VPC
- Web console—developed by Converge, similar look/feel to [GCP Compute Engine](notes/GCP%20Compute%20Engine.md) UI
- CLI tool—`pcloud` developed by Converge, similiar look/feel to `gcloud`

### Networking

- Customer [VPC](notes/GCP%20VPCs.md) peered to Converge owned VPC
- Converge VPC handles [Dedicated Interconnect](notes/GCP%20Cloud%20Interconnect.md) to Converge data centre containing Power hardware
- RFC1918 address space—no connectivity to Converge hardware from internet without going via customer VPC

![ibm_power_gcp](files/ibm_power_gcp.svg)

# References

- [Converge](https://convergetp.com/gcp/)
- [Official Documentation](https://pforg.ibm.com/docs/Intro_to_IBM_Power_Systems_for_Google_Cloud.html)
- [Introducing IBM Power Systems for Google Cloud (Cloud Next '19)](https://www.youtube.com/watch?v=_0ml4AwewXo)
