---
title: "Kubernetes Controllers"
date: "2022-03-28"
tags:
- kubernetes
---

## Overview

- Business logic implementing control loop within cluster
	- Move [Kubernetes](notes/moc/Kubernetes.md) cluster from current state closer to desired state
- Often send messages to API server to update state
	- e.g. [Job](notes/Job.md) controller schedules [Pod](notes/Pod.md) to be run via API. Pod then becomes desired state for other components in the control plane. When Pod completed, Job controller updates Job object to “Finished”
- Can also update external resources—e.g. to increase the number of nodes in the cluster
- Built-in controllers (e.g. [Deployment](notes/Deployment.md), Job) run on control plane—resilient
- Can extend Kubernetes by running custom controllers outside of control plane—e.g. as a set of Pods or externally to Kubernetes
