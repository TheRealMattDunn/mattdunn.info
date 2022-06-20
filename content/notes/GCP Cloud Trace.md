---
title: "GCP Cloud Trace"
date: "2022-02-25"
tags:
- gpc
- operations
---

## Overview

- [Distributed tracing](notes/Distributed%20Tracing.md)—collects latency data
	- Detect latencies between components of distributed app
- Automatic with [App Engine](notes/GCP%20App%20Engine.md) Standard, [Cloud Functions](notes/GCP%20Cloud%20Functions.md) and [Cloud Run](notes/GCP%20Cloud%20Run.md)
- Instrument with App Engine Flex, [Compute Engine](notes/GCP%20Compute%20Engine.md), [Kubernetes Engine](notes/GCP%20Kubernetes%20Engine%20(GKE).md) and non-GCP resources
	- [OpenTelemetry](notes/OpenTelemetry.md) or OpenCensus libraries recommended
- Detect bottlenecks
- Automatic alerts for large changes in latency
- API available for any source
- Integrates with Zipkin
	- Applications instrumented with Zipkin
	- Telemetry sent to Cloud Trace for analysis
