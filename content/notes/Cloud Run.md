---
title: "Cloud Run"
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

## Developing

- Cloud Run deployments called Services
- Each change creates a new revision
- Traffic routing—split traffic between revisions
	- Canary and blue/green deployements

### Container Requirements

- Must listen for request on specified port
	- HTTPS, gRPC, [Pub/Sub](notes/Pub%20Sub.md), Cloud Tasks, Cloud Scheduler
- Must be stateless
- Must not spawn background tasks

# References

- [GCP Decision Trees](notes/GCP%20Decision%20Trees.md)
