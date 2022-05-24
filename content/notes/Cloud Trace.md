---
title: "Cloud Trace"
date: "2022-02-25"
tags:
- gpc
- operations
---

## Overview

- Distributed tracing—collects latency data
	- Detect latencies between components of distributed app
- Automatic with [App Engine](notes/App%20Engine.md) Standard, [Cloud Functions](notes/Cloud%20Functions.md) and [Cloud Run](notes/Cloud%20Run.md)
- Instrument with App Engine Flex, [Compute Engine](notes/Compute%20Engine.md), [Kubernetes Engine](notes/Kubernetes%20Engine.md) and non-GCP resources
	- OpenTelemetry or OpenCensus libraries recommended
- Detect bottlenecks
- Automatic alerts for large changes in latency
- API available for any source
- Integrates with Zipkin
	- Applications instrumented with Zipkin
	- Telemetry sent to Cloud Trace for analysis
