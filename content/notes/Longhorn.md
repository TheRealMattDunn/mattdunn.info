---
title: "Longhorn"
date: "2022-11-04"
tags:
- kubernetes
- storage
---

## Overview

- Lightweight block storage system for [Kubernetes](notes/moc/Kubernetes.md)
- Open source—originally developed by Rancher
	- Now incubating project of CNCF
- Partition block storage into Longhorn volumes
- Replication across nodes and data centres
- Backups to NFS and S3
- Cross-cluster DR
- Scheduled snapshots and backups
- Thin provisioned
- ReadWriteOnce only—block storage
	- ReadWriteMany experimental feature via NFS provisioner

## Architecture

![[files/longhorn_architecture.svg]]

- Control plane—Longhorn Manager
- Data plane—Longhorn Engine (storage controller)

### Longhorn Manager

- [Operator](notes/Kubernetes%20Operator%20Pattern.md)
- [DaemonSet](notes/DaemonSet.md)
- Creates/manages volumes in cluster
- Handles API calls from UI or volume plugins
- Creates Longhorn volume CRD
	- Creates new volumes when CRD object created

### Longhorn Engine

- Created by Longhorn Manager when asked to create volumes
- Created on node where volume will be placed
	- Also on nodes where replicas will be placed
- Microservices-based design
	- Each Engine serves a single volume
	- Controller crashes affect only a single volume
	- Upgrades without affecting all volumes

## Replicas

- Chain of snapshots
	- Each snapshot is a diff to previous
	- Volumes can be reverted to snapshot

## Backups

- Stored in NFS or S3 compatible object storage
- Replicas are synchronous—hard to do cross-region replication due to latency
	- Address with backups
- Use one snapshot as source
	- Flattened chain of snapshots
- Schedules
- Can restore to DR volumes
