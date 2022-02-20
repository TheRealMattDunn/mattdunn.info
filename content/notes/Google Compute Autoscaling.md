---
title: "Google Compute Autoscaling"
date: "2022-02-20"
tags:
- gcp
- compute
---

### Compute Autoscaling

| Service             | Min instances | Min instances for HA      | How?                                              | Speed                |
| ------------------- | ------------- | ------------------------- | ------------------------------------------------- | -------------------- |
| Compute Engine      | 1 instance    | 2 instances               | MIG / MIB + load balancer                         | Moderate / better    |
| GKE Pods            | 1 Pod         | 2 Pods (e.g., Deployment) | Load-based—Horizontal Pod Autoscaler              | Decent               |
| GKE Node Pools      | 1 node        | 3 nodes                   | Kubernetes Pod back-pressure                      | Slow                 |
| App Engine Flexible | 1 container   | 2 containers              | Request-based (same autoscaler as Compute Engine) | Gradual              |
| App Engine Standard | 0             | 0                         | Request-based                                     | Almost instantaneous |
| Cloud Run           | 0             | 0 (adjustable)            | Request-based                                     | Very fast            |
| Cloud Functions     | 0             | 0 (optional)              | Request-based                                     | Almost instantaneous |

# References

- [notes/GCP Compute Services](notes/GCP%20Compute%20Services)
