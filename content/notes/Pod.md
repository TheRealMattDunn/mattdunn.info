---
title: "Pod"
date: "2022-02-18"
tags:
- kubernetes
---

## Overview

- Fundamental Kubernetes workload abstraction
- Groups of containers

## Requests and Limits

- Specify requests and limits for each container in the Pod, e.g. CPU and memory
- Highly recommended
- Requests:
	- Used by the kube-scheduler to decide which node to place Pod on
- Limits:
	- Enforced limit by kubelet

# References

- [Kubernetes](notes/Kubernetes.md)
