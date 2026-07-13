---
title: GKE Cluster Autoscaling
date: 2022-02-09
last-modified: 2024-03-25
tags:
  - google-cloud
  - gke
  - kubernetes
---

## Scaling Down

[Kubernetes Engine (GKE)](notes/Kubernetes%20Engine%20(GKE).md) clusters can be prevented from scaling down, and deleting nodes due to:
- Pod affinity/anti-affinity rules preventing them from being evicted
- Pods with local storage
- Pods not managed by a controller, such as a Deployment, StatefulSet etc.
- An application's PodDisruptionBudget

## References

- [Cluster autoscaler documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
