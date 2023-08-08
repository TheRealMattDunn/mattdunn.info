---
title: "KubeVirt"
date: "2022-10-17"
tags:
- kubernetes
- iaas
- virtual machine
- vm
---

## Overview

![vm_searches](files/vm_searches.svg)

- VMs not going away—still a significant number of searches
- KubeVirt marries VMs and [Kubernetes](notes/moc/Kubernetes.md)
- [Operator](notes/Kubernetes%20Operator%20Pattern.md) plus CRDs
- Maps workloads to [Pods](notes/Pod.md)
- Declarative—desired state of VM
- VMs run in Pods—same tools etc.
- Extends API—`kubectl` etc.
- `virtctl`—optional CLI tool
	- More convenience e.g. graphical desktops
- Start, stop, live migration
- Multi-network
- SR-IOV
- Block storage (PVs)
- Snapshots

### Benefits

- Develop on and use one platform—developer self-service
- Kube-on-kube—Kubernetes running on KubeVirt VMs
	- Underlying cluster—infra cluster
- Operate one platform
- Kubernetes at heart
	- Extend to support legacy apps as long as required
- Long term goal—Kuebrnetes
- Scale one platform

### Challenges

- Opinionated `virt-operator` deployment model
	- Customizations complex
- `virt-operator` requires many privileges
- Self-signed certs and CAs
	- Not always desirable—might have own CA
- No support for custom kubelet path
- Requirement for NET_RAW

## Use Cases

- VM template generation
- Create Dev envs
- Kube-in-kube
- Nested virtualization
	- Run VMs within Kubernetes clusters running on VMs
- Appliances, other OSes
	- Unable to run in containers

## Architecture

![Untitled Diagram](files/kubevirt_architecture.svg)

## Tips

- Test suite in KubeVirt codebase
	- Run as Cron to continuously test that KubeVirt is working correctly
- Prometheus endpoints
- Deploy Containerized Data Importer (CDI)
	- Import data in PVs
