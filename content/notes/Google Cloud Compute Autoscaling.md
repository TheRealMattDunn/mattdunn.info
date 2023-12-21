---
title: Google Cloud Compute Autoscaling
date: 2022-02-20
last-modified: 2023-12-21
tags:
  - google-cloud
  - compute
---

## Compute Autoscaling

![Google Cloud Compute Autoscaling](files/google_cloud_compute_autoscaling.svg)

| Service                                          | Min instances | Min instances for HA     | How?                                              | Speed                |
| ------------------------------------------------ | ------------- | ------------------------ | ------------------------------------------------- | -------------------- |
| [Compute Engine](notes/Compute%20Engine.md)      | 1 instance    | 2 instances              | MIG / MIB + load balancer                         | Moderate / better    |
| [GKE](notes/Kubernetes%20Engine%20(GKE).md) Pods | 1 Pod         | 2 Pods (e.g. Deployment) | Load-based—Horizontal Pod Autoscaler              | Decent               |
| GKE Node Pools                                   | 1 node        | 3 nodes                  | Kubernetes Pod back-pressure                      | Slow                 |
| [App Engine](notes/App%20Engine.md) Flexible     | 1 container   | 2 containers             | Request-based (same autoscaler as Compute Engine) | Gradual              |
| App Engine Standard                              | 0             | 0                        | Request-based                                     | Almost instantaneous |
| [Cloud Run](notes/Cloud%20Run.md)                | 0             | 0 (adjustable)           | Request-based                                     | Very fast            |
| [Cloud Functions](notes/Cloud%20Functions.md)    | 0             | 0 (optional)             | Request-based                                     | Almost instantaneous |
