---
title: "Pod"
date: "2022-02-18"
tags:
- kubernetes
---

## Overview

- Fundamental [Kubernetes](notes/moc/Kubernetes.md) workload abstraction
- Groups of containers

## Requests and Limits

- Specify requests and limits for each container in the Pod, e.g. CPU and memory
- Highly recommended
- Requests:
	- Used by the kube-scheduler to decide which node to place Pod on
- Limits:
	- Enforced limit by kubelet

## Health Checks

### Readiness Probes

- Lets Kubernetes know when app is ready to serve traffic
	- Readiness probe must pass before Service sends traffic to Pod
	- Kubernetes stops sending traffic if failure occurs

### Liveness Probes

- Lets Kubernetes know if app is alive
	- If dead, Kubernetes removes Pod and replaces with a new one
- Ensure probe doesn't start until app is ready—pod replaced
	- Use `initialDelaySeconds` parameter—set to p99 startup time (or average plus buffer)

### Types

- HTTP
	- HTTP server inside app
	- Path pinged—2xx/3xx response considered healthy
- Command
	- Command run inside container—exit 0 considered healthy
- TCP
	- TCP connection to specified port—healthy if connection established
	- Good candidates: gRPC or FTP services
