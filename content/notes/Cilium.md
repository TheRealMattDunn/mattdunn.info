---
title: "Cilium"
date: "2022-11-16"
tags:
- networking
- kubernetes
---

## Overview

- Networking, observability, and security solution
- Open Source
- Secures network connectivity between services deployed in Linux container management platforms, e.g. [Kubernetes](notes/moc/Kubernetes.md)
- Based on eBPF
	- Enables dynamic insertion of security visibility and control logic into the Linux kernel
	- Security policies applied/updated without changes to application code of container config
- Developed by Isovalent

### Traditional Kubernetes Networking

- iptables
	- User-space application
	- Filters on IP address/port
	- Frequent churn in Kubernetes/microservices—100s of thousands of entries
	- Doesn't scale well—simply a list of rules which must be replaced as a whole, difficult to scale

## Cilium CNI

- Based on eBPF—implemented as a hash table lookup, more performant than iptables
- Inserts security visibility and enforcement based on service/pod/container ID
- Can filter on application layer e.g. HTTP
- Decouples security from addressing
- Stronger security isolation—HTTP L4, L4 segregation

## Cilium Service Mesh

- Sidecar-less option (unlike Istio)—reduction in the number of containers, more performant
	- Not all features supported e.g. L7 load balancing, ingress and rate limiting
- Bring your own control plane
	- Ingress
	- Istio (currently requires sidecars)
	- Envoy
	- Gateway API (roadmap)
	- SPIFFE (roadmap)
- mTLS
