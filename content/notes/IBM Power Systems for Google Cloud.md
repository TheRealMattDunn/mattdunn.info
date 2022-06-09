---
title: "IBM Power Systems for Google Cloud"
date: "2022-06-07"
tags:
- ibm
- power
- gcp
---

## Overview

- IaaS for IBM PowerVM based virtual machines (LPARs)
- Integrated offering
	- Consume 3rd party service (i.e. IBM Power) as though GCP native
	- 4 areas:
		- Billing—integrated through GCP marketplace
		- User experience—like interacting with Google infrastructure
		- Networking—low latency, HA, secure connection to IBM infrastructure (never over internet, private IP space)
		- Support—tier 1 support from Google, with escalation to IBM (critical workloads)
- IBM runs infrastructure—customer responsible for OS upwards
- Monthly subscription
	- T-shirt sizing—can change plans
	- Billing prorated for partial months
- Access to GCP services from within LPARs
- Power9-based servers
	- Same infra as used in usual on-prem deployments—by design

### Management

- OpenAPI interface—running on GKE in IBM-owned VPC
- Web console—developed by IBM, similar look/feel to [GCP Compute Engine](notes/GCP%20Compute%20Engine.md) UI
- CLI tool—`pcloud` developed by IBM, similiar look/feel to `gcloud`

### Networking

- Customer [VPC](notes/GCP%20VPCs.md) peered to IBM owned VPC
- IBM VPC handles [Dedicated Interconnect](notes/GCP%20Cloud%20Interconnect.md) to IBM data center containing Power hardware
- RFC1918 address space—no connectivity to IBM hardware from internet without going via customer VPC

![ibm_power_gcp](files/ibm_power_gcp.svg)

# References

- [Official Documentation](https://pforg.ibm.com/docs/Intro_to_IBM_Power_Systems_for_Google_Cloud.html)
- [Introducing IBM Power Systems for Google Cloud (Cloud Next '19)](https://www.youtube.com/watch?v=_0ml4AwewXo)
