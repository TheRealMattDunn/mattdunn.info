---
title: "OpenEBS"
date: "2022-11-04"
tags:
- kubernetes
- storage
---

## Overview

- Turns available storage on [Kubernetes](notes/moc/Kubernetes.md) nodes into local or distributed persistent volumes
- Open source—enterprise support offered by DataCore

### Features

- Synchronous replication
- Snapshots/clones
- Backup/restore
- Prometheus metrics

## Architecture

### Data Engines

- Data plane
- Read and write operations to underlying storage
	- Aggregates block capacity—carves out volumes
- NVMe or iSCSI
- Synchronous replication, compression, encryption, snapshots (incremental or full)
- Strong consistency
- Different types—different capabilities/use cases

#### cStor

- Provides resilience
- Serves iSCSI block storage using underlying disks or cloud volumes
- Features: synchronous data replication

#### LocalPV

- PV available on single node only
	- App needs to tolerate reduced availability/data loss
- Useful for workloads that can configure their own HA, e.g. Elastic, MinIO

### Control Plane

- Manages storage available on worker nodes
- Configures/manages data engines
- Interface with CSI—volume lifecycle
- Carry out operations e.g. snapshots, clones, resize, backup/restore etc.
- Integrates with other tools e.g. Prometheus/Grafana, telemetry, logging
	- Debugging, troubleshooting, log management
- Kubernetes native—microservices

![[files/openebs_architecture.svg]]
