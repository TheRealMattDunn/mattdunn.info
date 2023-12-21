---
title: Scaling Stateful Apps on GKE
date: 2022-10-17
last-modified: 2023-10-23
tags:
  - google cloud
  - gke
  - kubernetes
---

## Examples

- Redis
- RabbitMQ
- MongoDB
- Elasticsearch

## Three Operating Models

1. DIY—self-managed in [Kubernetes](notes/moc/Kubernetes.md)
2. Kubernetes [Operators](notes/Kubernetes%20Operator%20Pattern.md)—partially managed, responsibility shared with vendor
3. SaaS—solutions running on GKE under the hood

## GKE Stateful Platform

![gke_stateful_platform](files/gke_stateful_platform.svg)
