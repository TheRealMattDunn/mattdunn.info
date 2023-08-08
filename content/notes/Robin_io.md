---
title: "Robin.io"
date: "2022-11-03"
tags:
- storage
- kubernetes
---

## Overview

- Advanced storage and data management
- Any [Kubernetes](notes/moc/Kubernetes.md) distribution—on-prem or cloud
- Deployed as a [Kubernetes Operator](notes/Kubernetes%20Operator%20Pattern.md)
	- Can be fully automated
- Integrates with kubectl, Helm, and Operators
	- Standard APIs, CLI, and GUI
- "Bare metal performance at scale"
- Application-aware—not just about volumes
- Uses CSI

## Features

### Availability and Data Protection

- Backup/recovery
- Snapshots
- Rollbacks
- Cloning
- Automated discovery of nodes and disks
- Auto-reconnect disks on node failure
- Multi-cluster DR—synchronous and asynchronous replication

### Performance Management

- IOPs-based QoS enforcement
- Live data rebalancing
- Policy-driven data locality
	- Affinity/anti-affinity

### Capacity Management

- Selective replication—per application basis
- Policy-driven volume expansion
- Data compression
- Differential snapshots
- Policy-driven auto-provisioning
	- Based on drive type (NVMe, HDD, SSD), rack, cluster, location
- Block and file
- ReadOnlyOnce, ReadWriteOnce, ReadWriteMany

## Architecture

![[files/robin_architecture.svg]]
