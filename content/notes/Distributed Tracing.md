---
title: "Distributed Tracing"
date: "2022-06-20"
tags:
- observability
- telemtry
- tracing
---

## Overview

### Problem Statement—Metrics and Logs

- Metrics and logs—not enough visibility to diagnose issues
	- Metrics
		- High-level view of system health
		- Show when behaviour changes, e.g. CPU usage of database
		- No root cause
		- High-level data point
	- Logs
		- “Breadcrumb trail” showing application behaviour
		- Distributed systems—distributed logs, difficult to follow
		- Low-level data point
- Metrics too high-level, logs too low level to show full picture

### Distributed Tracing

- Shows relationships between components and services
	- Communication between distributed components
	- How requests are propagated

![trace](files/trace.svg)

- Span—description of event in system
	- Has parent and child spans
- Trace—tree/list of spans
	- cf. call stacks
	- How long each request took
	- Services interacted with
	- Latency
	- Visualise synchronous/asynchronous calls

# References

- [What is OpenTelemetry? A Straightforward Guide](https://www.aspecto.io/blog/what-is-opentelemetry-the-infinitive-guide/)
