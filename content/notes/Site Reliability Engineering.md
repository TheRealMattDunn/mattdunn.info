---
title: "Site Reliability Engineering"
date: "2022-02-08"
tags:
- sre
---

# Site Reliability Engineering

> SRE is what happens when a software engineer is tasked with what used to be called operations.

![sli_slo_sla](files/sli_slo_sla.svg)

## SLIs

- Service level indicators
- Metrics over time
- Specific to a user journey
- Examples:
	- Request latency
	- Failure rate
	- Batch throughput

## SLOs

- Service level objectives
- Target
- Don't strive for 100%
	- Expensive
	- Complex
	- Not actually needed by users
	- Use remaining time to create new features

## SLAs

- Service level agreements
- Contractual obligations
- Penalties if not met

# References

- [Google Cloud Certified Professional Cloud Architect](notes/Google%20Cloud%20Certified%20Professional%20Cloud%20Architect.md)
