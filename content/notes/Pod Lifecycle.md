---
title: "Pod Lifecycle"
date: "2022-04-22"
tags:
- kubernetes
---

## Lifecycle Diagram

![pod_lifecycle](files/pod_lifecycle.svg)

## Common Errors

- `ErrImagePull`—the container image could not be retrieved from the registry (perhaps incorrect tag?)
- `ImagePullBackOff`—unable to pull the image from the registry. Kubernetes will continue to try, with exponential back-off delay. Most likely incorrect credentials for the registry.
- `CrashLoopBackOff`—unable to start [Pod](notes/Pod.md); repeatedly crashing. Kubernetes will continue to try, with exponential back-off delay.
