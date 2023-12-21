---
title: Migrate for Anthos and GKE
date: 2022-02-28
last-modified: 2023-10-23
tags:
  - google-cloud
  - anthos
  - gke
  - containers
---

## Overview

- Migrate for Anthos (M4A)
- Transform VM-based workloads to containers running in [Kubernetes Engine](notes/Kubernetes%20Engine%20(GKE).md), optionally on [Anthos](notes/Anthos.md)
- Modernize legacy applications
- Fit assessment tool—determine which VMs are suitable for migration
- Console, API or CRD-based API
- Option to migrate to Autopilot clusters or Cloud Run

## Considerations

- What about:
	- VMs with multiple apps?
	- Databases?
	- Networking?

### VMs with Multiple Apps

- Usually one process per pod in [Kubernetes](notes/moc/Kubernetes.md)
- M4A doesn't create separate images for each service within a VM
- Solution: ensure only one component is running when processing with M4A
	- Re-run for each component

### Databases

![M4A DB Decision Tree](files/m4a_db_decision_tree.svg)

### Networking

- Choose short service names
- Use [ConfigMaps](notes/ConfigMap.md) for service discovery
- Use network policies to restrict access to services
	- e.g. Restrict which Pods can communicate with DB tier
