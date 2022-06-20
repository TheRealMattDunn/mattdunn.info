---
title: "SLIs, SLOs and SLAs"
date: "2022-06-20"
tags:
- sre
---

## Overview

![sli_slo_sla](files/sli_slo_sla.svg)

### SLIs

- Service level indicators
- Metrics over time
- Specific to a user journey
- Examples:
	- Request latency
	- Failure rate
	- Batch throughput

### SLOs

- Service level objectives
- Target
- Don't strive for 100%
	- Expensive
	- Complex
	- Not actually needed by users
	- Use remaining time to create new features

### SLAs

- Service level agreements
- Contractual obligations
- Penalties if not met
