---
title: "GCP Cloud Run"
date: "2022-02-16"
tags:
- gcp
- compute
- serverless
- containers
---

## Overview

- Containerized applications
- Knative-based
- Any language/library/binary
- Regional
- Fully managed PaaS
- Autoscaling from zero
- Priced down to 100ms
- Available in all and future regions
- Jobs:
	- Execute containers to completion
	- e.g. Scheduled jobs, batch data processing
- Health checks
	- Startup probes—customize when container ready to serve traffic (TCP by default)
	- Liveness probes—restart if container unhealthy
- Startup CPU boost
	- 2 x CPU during startup
	- Reduce cold starts, e.g. Spring Boot—up to 0.5 startup time
- Software delivery shield
	- Vulnerabilities and build provenance in Cloud Run
	- Security recommendations

### Use Cases

- Public websites and APIs
- Internal services
- Data processing

## Developing

- Cloud Run deployments called Services
- Each change creates a new revision
- Traffic routing—split traffic between revisions
	- Canary and blue/green deployements

### Container Requirements

- Must listen for request on specified port
	- HTTPS, gRPC, [Pub/Sub](notes/GCP%20Pub%20Sub.md), Cloud Tasks, Cloud Scheduler
- Must be stateless
- Must not spawn background tasks

# References

- [GCP Decision Trees](notes/moc/GCP%20Decision%20Trees.md)
