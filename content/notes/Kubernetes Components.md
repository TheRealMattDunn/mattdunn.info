---
title: "Kubernetes Components"
date: "2022-05-23"
tags:
- kubernetes
---

## Kubernetes Components

![kubernetes_components](files/kubernetes_components.svg)

### Control Plane

#### Kube-apiserver

- Exposes the [Kubernetes](notes/moc/Kubernetes.md) API—front end to control plane
- Scales horizontally

#### Kube-scheduler

- Responsible for assigning [Pods](notes/Pod.md) to nodes
- Looks at Pod resource requirements and node utilization
- Takes factors such as hardware/software/policy constraints into account when scheduling

#### Kube-controller-manager

- Runs [Controller](notes/Kubernetes%20Controllers.md) processes
- Examples:
	- Node controller—watches and responds to nodes going down
	- [Job](notes/Job.md) controller—watches for Jobs and creates Pods to run those tasks
	- Endpoints controller—populates the Endpoint object (joins Services and Pods)

#### Cloud-controller-manager

- Embeds cloud-specific logic
- Links cluster to cloud provider's API

#### Etcd

- Consistent, highly available key value store
- Backing store for all Kubernetes data

### Nodes

#### Kublet

- Agent running on each node
- Ensures containers are running within a Pod—takes PodSpecs and ensures containers described within are running and healthy

#### Kube-proxy

- Network proxy
- Maintains network rules on nodes—allows network communication to Pods from network sessions inside or outside of the cluster
- Uses OS packet filtering layer if available, otherwise kube-proxy forwards traffic itself

#### Container Runtime

- Runtime responsible for running containers
- By default containerd
- Supports any implementation of the Kubernetes CRI (Container Runtime Interface)
