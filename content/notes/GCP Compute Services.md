---
title: "GCP Compute Services"
date: "2022-02-16"
tags:
- GCP
- compute
---

## Services Overview

![gcp_compute_services](/files/gcp_compute_services.svg)

- [Compute Engine](notes/Google%20Compute%20Engine.md)
- [Kubernetes Engine (GKE)](notes/Google%20Kubernetes%20Engine.md)
- [App Engine](notes/Google%20App%20Engine.md)
- [Cloud Run](notes/Google%20Cloud%20Run.md)
- [Cloud Functions](notes/Google%20Cloud%20Functions.md)

## Choosing the Correct Service

![Google compute decision tree](/files/google_compute_decision_tree.svg)

### Autoscaling

| Service             | Min instances | Min instances for HA      | How?                                              | Speed                |
| ------------------- | ------------- | ------------------------- | ------------------------------------------------- | -------------------- |
| Compute Engine      | 1 instance    | 2 instances               | MIG / MIB + load balancer                         | Moderate / better    |
| GKE Pods            | 1 Pod         | 2 Pods (e.g., Deployment) | Load-based—Horizontal Pod Autoscaler              | Decent               |
| GKE Node Pools      | 1 node        | 3 nodes                   | Kubernetes Pod back-pressure                      | Slow                 |
| App Engine Flexible | 1 container   | 2 containers              | Request-based (same autoscaler as Compute Engine) | Gradual              |
| App Engine Standard | 0             | 0                         | Request-based                                     | Almost instantaneous |
| Cloud Run           | 0             | 0 (adjustable)            | Request-based                                     | Very fast            |
| Cloud Functions     | 0             | 0 (optional)              | Request-based                                     | Almost instantaneous |
