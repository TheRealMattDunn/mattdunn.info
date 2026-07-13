---
title: HorizontalPodAutoscaler
date: 2022-02-18
last-modified: 2023-10-23
tags:
  - kubernetes
---

## Overview

- Scales [Pods](notes/Pod.md) based on metrics
	- CPU, memory, disk usage
	- Custom metrics—internal to the cluster
	- External metrics—e.g. from monitoring or [Pub/Sub](notes/Pub%20Sub.md)
- Should be applied to the Deployment rather than the ReplicaSet
	- Otherwise would be removed during rolling updates
