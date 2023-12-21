---
title: Predictable Demands Pattern
date: 2022-03-29
last-modified: 2023-09-04
tags:
  - kubernetes
  - design-patterns
---

## Introduction

- [Kubernetes](notes/moc/Kubernetes.md) containers contain logic written in different languages—each with different resource requirements
- The developer is best placed to know these requirements—from testing

## Solution

- Knowing resource requirements up-front allows:
	- Kubernetes to intelligently make decisions on [Pod](notes/Pod.md) placement—more efficient hardware utilization
	- Capacity planning—more cost-effective environments

### Runtime Dependencies

- File storage
	- Container storage is ephemeral
	- Kubernetes offers Pod-level storage which can survive restarts
- Kubernetes Volumes:
	- `emptyDir`—ephemeral to Pod
	- PersistentVolume—long-lived
	- Type of required volume affects Pod placement—Pod might not be scheduled if no node available
- Configuration e.g. [ConfigMaps](notes/ConfigMap.md), Secrets

### Resource Profiles

- Compute resource requirements
- Types:
	- Compressible—can be throttled if container goes over limit, e.g. CPU, network bandwidth
	- Incompressible—can't be throttled (container killed if goes over limit), e.g. memory
- Profiles—soft/hard limits:
	- `requests`—minimum amount of resource required
	- `limits`—maximum amount of resource permitted
- Scheduler uses `requests` for Pod placement on nodes
- Quality of Service (QoS):
	- Best effort—no `requests`, no `limits`—killed first when node under incompressible resource pressure
	- Burstable—`requests` != `limits`—killed if no best effort Pods available
	- Guranteed—`requests` == `limits`—killed last

### Pod Priority

- Importance of Pods relative to other Pods
- Specify PriorityClass object
- Influences scheduling order
- If no Pods with enough capacity, scheduler can pre-empt other Pods with lower priority—QoS not considered
- Use with caution

### Resource Quotas

- Limit resources in namespaces
	- CPU, mem, storage consumed
	- Number of objects (ConfigMaps, Secrets, Pods, Services)

### Limit Ranges

- Min/max permitted amounts for `requests`/`limits`
- Also set `request` to `limit` ratio—overcommit level
	- Only `requests` used for Pod placement
	- High overcommit level increases chance for overcommitting of resources on node—degrades performance, Pods evicted

## References

- [Ibryam, B and Huß, R (2019), *Kubernetes Patterns*, O'Reilly](https://www.oreilly.com/library/view/kubernetes-patterns/9781492050278/)
