---
title: Cloud Trace
date: 2022-02-25
last-modified: 2023-10-23
tags:
  - google-cloud
  - operations
---

## Overview

- [Distributed tracing](Distributed%20Tracing.md)—collects latency data
	- Detect latencies between components of distributed app
- Automatic with [App Engine](App%20Engine.md) Standard, [Cloud Functions](Cloud%20Functions.md) and [Cloud Run](Cloud%20Run.md)
- Instrument with App Engine Flex, [Compute Engine](Compute%20Engine.md), [Kubernetes Engine](Kubernetes%20Engine%20(GKE).md) and non-Google Cloud resources
	- [OpenTelemetry](OpenTelemetry.md) or OpenCensus libraries recommended
- Detect bottlenecks
- Automatic alerts for large changes in latency
- API available for any source
- Integrates with Zipkin
	- Applications instrumented with Zipkin
	- Telemetry sent to Cloud Trace for analysis
