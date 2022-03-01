---
title: "GKE Cluster Autoscaling"
date: "2022-02-09"
tags:
- gke
- gcp
- kubernetes
---

## Scaling Down

Clusters can be prevented from scaling down, and deleting nodes due to:
- Pod affinity/anti-affinity rules preventing them from being evicted
- Pods with local storage
- Pods not managed by a controller, such as a Deployment, StatefulSet etc.
- An application's PodDisruptionBudget

# References

- [Cluster autoscaler documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
