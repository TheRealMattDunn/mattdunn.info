---
title: Optimizing Kubernetes for Reliability and Cost-Efficiency
date: 2023-09-04
last-modified: 2023-09-04
tags:
  - kubernetes
---

## Introduction

- Google [report](https://services.google.com/fh/files/misc/state_of_kubernetes_cost_optimization.pdf) into how Elite performers optimize their [Kubernetes](notes/moc/Kubernetes.md) clusters

## Golden Signals

- Workload rightsizing (`requests` vs actuals)
	- 3rd party tools e.g. Kubecost often use `requests` to calculate cost apportion for chargeback
- Demand-based down-scaling
	- Ensure apps can handle—startup/shutdown speed
- Cluster bin packing (`requests` vs allocatable)
- Discount coverage (percentage of cluster covered by e.g. spot or sustained use discounts)
	- Elite performers heavily use discounts—they understand what is going on within their clusters
	- Don't purchase commit before rightsizing—could over-commit, need data

## General Best Practices

- As a minimum: set resource `requests`
	- Set for workloads that actually need the reliability that [burstable/guaranteed QOS brings](notes/Predictable%20Demands%20Pattern.md)
	- Some workloads are fine with best-effort
	- Controls many critical aspects:
		- Scheduling
		- Bin packing
		- [HorizontalPodAutoscaler](notes/HorizontalPodAutoscaler.md)
		- [Cluster Autoscaling](notes/GKE%20Cluster%20Autoscaling.md)
		- Cost allocation
		- Reliability
		- Performance
- Use labels and `PodDisruptionBudgets`
- With multi-zonal clusters—look out for inter-zone egress cost
	- Can add up—be aware of cluster/application deployment topology
	- Istio can help
- With multi-regional failover clusters
	- Ensure failover region can warm up before scheduled failover

## GKE Best Practices

- Use [GKE](notes/GCP%20Kubernetes%20Engine%20(GKE).md) Cost Optimization tab
- Dashboards available at organizational level
- If using Autopilot—default min `requests` set by Autopilot if none set
	- Need to check before deployment—could under/over provision with default

## References

- [State of Kubernetes Cost Optimization](https://services.google.com/fh/files/misc/state_of_kubernetes_cost_optimization.pdf)