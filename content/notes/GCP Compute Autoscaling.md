---
title: "GCP Compute Autoscaling"
date: "2022-02-20"
tags:
- gcp
- compute
---

### Compute Autoscaling

![GCP Compute Autoscaling](files/gcp_compute_autoscaling.svg)

| Service                                                | Min instances | Min instances for HA     | How?                                              | Speed                |
| ------------------------------------------------------ | ------------- | ------------------------ | ------------------------------------------------- | -------------------- |
| [Compute Engine](notes/GCP%20Compute%20Engine.md)      | 1 instance    | 2 instances              | MIG / MIB + load balancer                         | Moderate / better    |
| [GKE](notes/GCP%20Kubernetes%20Engine%20(GKE).md) Pods | 1 Pod         | 2 Pods (e.g. Deployment) | Load-based—Horizontal Pod Autoscaler              | Decent               |
| GKE Node Pools                                         | 1 node        | 3 nodes                  | Kubernetes Pod back-pressure                      | Slow                 |
| [App Engine](notes/GCP%20App%20Engine.md) Flexible     | 1 container   | 2 containers             | Request-based (same autoscaler as Compute Engine) | Gradual              |
| App Engine Standard                                    | 0             | 0                        | Request-based                                     | Almost instantaneous |
| [Cloud Run](notes/GCP%20Cloud%20Run.md)                | 0             | 0 (adjustable)           | Request-based                                     | Very fast            |
| [Cloud Functions](notes/GCP%20Cloud%20Functions.md)    | 0             | 0 (optional)             | Request-based                                     | Almost instantaneous |
