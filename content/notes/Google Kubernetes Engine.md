---
title: "Google Kubernetes Engine"
date: "2022-02-16"
tags:
- gcp
- gke
- compute
- kubernetes
---

# Overview

- Two modes:
	- Standard—total control
	- Autopilot—fully managed
- Auto-repair and upgrade
- [Autoscaling](notes/GKE%20Cluster%20Autoscaling.md)

## Clusters

- At least one control plane and multiple worker nodes
	- Zonal—one control plane node
	- Regional—multiple control plane nodes
- Can't switch from regional to zonal (or vice versa) once cluster is created
- Private clusters—VPC native, internal IPs only
- For HA use multi-zonal node pools

# References

- [GCP Compute Services](notes/GCP%20Compute%20Services.md)
- [Kubernetes](notes/Kubernetes.md)
