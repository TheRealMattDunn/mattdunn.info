---
title: Cloud Run
date: 2022-02-16
last-modified: 2024-04-24
tags:
  - google-cloud
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
	- Can also have minimum instances always running—1 instance good for most workloads
- Priced down to 100ms
- Available in all and future regions
- Revisions:
	- 1+ containers, plus environment settings (e.g. environment variables, memory limits etc.)
	- Requests routed to latest healthy revision
	- Immutable—each change creates a new revision
	- Deploy container from tag—resolves to image digest, i.e. doesn't update revision tag moves between image digests
- Jobs:
	- Execute containers to completion
	- e.g. Scheduled jobs, batch data processing
	- 1+ tasks
	- Can configure task timeouts and retries
- Health checks
	- Startup probes—customize when container ready to serve traffic (TCP by default)
	- Liveness probes—restart if container unhealthy
- Startup CPU boost
	- 2 x CPU during startup
	- Reduce cold starts, e.g. Spring Boot—up to 0.5 startup time
- Software delivery shield
	- Vulnerabilities and build provenance in Cloud Run
	- Security recommendations
- Supported container registries:
	- Artifact Registry
	- Container Registry (deprecated)
	- DockerHub

### Use Cases

- Public websites and APIs
	- Server-side rendered pages
	- REST/GraphQL APIs
	- WebSockets
- Internal services
	- Internal sites/APIs
	- HTTP/gRPC microservices
- Data processing
	- [Event Driven Architectures](notes/Event%20Driven%20Architecture.md)
	- Scheduled scripts
	- Data batch processing
	- Background processing

## Services and Jobs

| Services                                      | Jobs                               |
| --------------------------------------------- | ---------------------------------- |
| Auto-scaled request-driven services           | Containers which run to completion |
| Triggered by events, WebSockets, HTTP/2, gRPC | Executed manually or on schedule   |
| Pay per request or per instance lifetime      | Pay while job executing            |

## Developing

- Cloud Run deployments called Services
- Each change creates a new revision
- Traffic routing—split traffic between revisions
	- Canary and blue/green deployements
- [Sidecar support](notes/Cloud%20Run%20Sidecars.md)
- Concurrent requests—80 per container good default for most workloads
	- Experiment to determine best value
	- Need to adjust memory accordingly
- Session affinity—best effort

### Container Runtime Contract

- Linux x86_64 ABI format container images
- 1 ingress container, 0+ sidecars
- Ingress container must listen for request on 0.0.0.0:8080 (port configurable)
	- HTTPS, gRPC, [Pub/Sub](notes/Pub%20Sub.md), Cloud Tasks, Cloud Scheduler
- Must be stateless
- Must not spawn background tasks
- Jobs must exit 0 for success, or >0 for failure
- TLS must not be implemented in the container—terminated by Cloud Run
- The container filesystem is in-memory, and not persisted between instances
- The metadata server (http://metadata.google.internal) is available for information e.g. generate service account tokens

## References

- [Google Cloud Decision Trees](notes/moc/Google%20Cloud%20Decision%20Trees.md)
