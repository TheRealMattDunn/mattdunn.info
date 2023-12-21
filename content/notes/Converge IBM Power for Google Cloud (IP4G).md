---
title: Converge IBM Power for Google Cloud (IP4G)
date: 2022-06-07
last-modified: 2023-10-23
tags:
  - google-cloud
  - ibm
  - power
---

## Overview

- Offered by Converge; previously owned by IBM
- IaaS for IBM PowerVM based virtual machines (LPARs)
- Integrated offering
	- Consume 3rd party service (i.e. IBM Power) as though Google Cloud native
	- 4 areas:
		- Billing—integrated through Google Cloud marketplace
		- User experience—like interacting with Google infrastructure
		- Networking—low latency, HA, secure connection to Converge infrastructure (never over internet, private IP space)
		- Support—tier 1 support from Google, with escalation to Converge (critical workloads)
- Converge runs infrastructure—customer responsible for OS upwards
- Monthly subscription
	- T-shirt sizing—can change plans
	- Billing prorated for partial months
- Access to Google Cloud services from within LPARs
- Power9-based servers
	- Same infra as used in usual on-prem deployments—by design
	- Power10 available on request
- AIX, IBM i, or Linux operating systems
- Regions (as of June 2023):
	- us-east4 (N. Virginia)
	- us-central1 (Iowa)
	- europe-west3 (Frankfurt)
	- northamerica-northeast1 (Montréal)
	- northamerica-northeast2 (Toronto)
	- europe-west4 (Netherlands)—roadmap

### Management

- OpenAPI interface—running on GKE in Converge-owned VPC
- Web console—developed by Converge, similar look/feel to [Compute Engine](notes/Compute%20Engine.md) UI
- CLI tool—`pcloud` developed by Converge, similiar look/feel to `gcloud`

### Networking

- Customer [VPC](notes/Google%20Cloud%20VPCs.md) peered to Converge owned VPC
- Converge VPC handles [Dedicated Interconnect](notes/Cloud%20Interconnect.md) to Converge data centre containing Power hardware
- RFC1918 address space—no connectivity to Converge hardware from internet without going via customer VPC

![IBM Power Google *Cloud*](files/ibm_power_google_cloud.svg)

## References

- [Converge](https://convergetp.com/gcp/)
- [Official Documentation](https://pforg.ibm.com/docs/Intro_to_IBM_Power_Systems_for_Google_Cloud.html)
- [Introducing IBM Power Systems for Google Cloud (Cloud Next '19)](https://www.youtube.com/watch?v=_0ml4AwewXo)
