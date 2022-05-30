---
title: "GCP Cloud Functions"
date: "2022-02-16"
tags:
- gcp
- compute
- serverless
---

## Overview

- FaaS
- Event driven
- Triggers:
	- HTTP
	- [Cloud Storage](notes/GCP%20Cloud%20Storage.md)
	- [Pub/Sub](notes/GCP%20Pub%20Sub.md)
	- [Cloud Firestore](notes/GCP%20Cloud%20Firestore.md)
	- [Audit logs](notes/GCP%20Cloud%20Logging.md)
	- Cloud Scheduler
- The glue between services—both in and outside GCP
- Use cases:
	- Data processing
	- Webhooks
	- IoT

## Developing

- Event driven
	- Lifecycle of function serves to answer a single request
	- Platform scales to millions of concurrent function instances
- Event types:
	- HTTP functions—triggered by HTTP requests
	- Background functions—Pub/Sub messages, Cloud Storage events, Firebase events etc.

### Best Practices

- Don't start background activities—will be killed when the main process terminates
- Only use required dependencies—improves startup times
- Delete temporary files—stored in memory, could persist into next invocation eventually resulting in OOM errors

## Securing

- Function runs with own [Service Account](notes/GCP%20Cloud%20IAM.md)
	- Granular permissions—both callers, and function's access to other resources
- `roles/cloudfunction.invoker`—applies to individual functions
	- Set to `allUsers` to make function public

## Networking

- Ingress
	- Default—allow all ingress
	- Can configure to allow only from [VPCs](notes/GCP%20VPCs.md) within project or VPC Service Control perimeter
- Egress
	- Default—route internal IPs and DNS names via VPC; everything else routed via internet
	- Can restrict all traffic to go via Serverless VPC Access Connector

# References

- [GCP Decision Trees](notes/GCP%20Decision%20Trees.md)
