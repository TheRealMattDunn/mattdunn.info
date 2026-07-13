---
title: "Kubernetes Operator Pattern"
date: "2022-03-28"
tags:
- kubernetes
---

## Overview

- Method for packaging, deploying and managing [Kubernetes](notes/moc/Kubernetes.md) applications
	- i.e., an application that runs in Kubernetes and is managed by the Kubernetes API
- Uses CRDs to manage applications and components
- Operators follow Kubernetes principles—e.g. control loop ([Controllers](notes/Kubernetes%20Controllers.md))
- Links Controllers to one or more CRDs

## Examples

- Deploy app on demand
- Taking backups of app state
- Failure simulation—resilience testing
- Provide housekeeping for DB CRD
	- Create PVCs when new DB created
	- Snapshot DB when deleted
	- Manage regular backups

## Arguments Against

- Complexity—more code to maintain
- Advanced use-cases only—persistent, highly available systems, e.g. distrubuted DB with quorum
- Not for distributed apps which simply talk to a DB
- Don't use simply for configuration management—use Helm, GitOps etc.
- Not simply for exposing external systems
	- Better paradigms to come
	- Hides complex logic, but still a complex system to manage
- Security concerns—highly privileged component, adds risk

# References

- [Kubernetes: When to Use, and When to Avoid, the Operator Pattern](https://thenewstack.io/kubernetes-when-to-use-and-when-to-avoid-the-operator-pattern/)
