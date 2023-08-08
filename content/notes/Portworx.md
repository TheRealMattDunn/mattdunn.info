---
title: "Portworx"
date: "2022-10-28"
tags:
- storage
- kubernetes
---

## Overview

### Rationale

- Containers in [Kubernetes](notes/moc/Kubernetes.md) require:
	- Dynamic provision of storage alongside the container lifecycle
	- Reliability—the ability to withstand failure of nodes/disks/storage arrays
	- High density of volumes per host
	- Security
	- Availability across availability zones

### PX-Store

- Virtual storage overlay
- Deployed as containers, for containers
- Aggregates storage across nodes
- Auto categorize storage pools
- Replication
- Multi-zonal clusters
- Backups, e.g. into [AWS](notes/moc/AWS.md) S3
- Disaster recovery
- Scalability—PX-Autopilot

## Architecture

- Deployed as a container
- Design principles:
	- Heterogeneous systems
		- Difference CPU/memory profiles
		- Built-in node disks, or storage arrays (or mixed)
	- Scaling—nodes and storage
- Node/availability zone/storage outages tolerable
- Application-level granularity
- Managed with Kubernetes YAML
- Extensibility—supports OpenStorage SDK and APIs

## Deployment Models

- Disaggregated
	- Storage nodes separate from compute—2 clusters
- Hyperconverged
	- Compute and storage co-located
	- Better performance

## Components

- Control plane
	- Cluster management
- Data plane
	- Data storage

### Control Plane

![[files/portworx_control_plane.svg]]

## Clustering

![[files/portworx_clustering.svg]]

### Quorum

- Consensus—to elect leader
- Storageless nodes have no voting rights, so can't form quorum—but can join an existing quorum
- Raft algorithm
	- Consensus algorithm
	- Random timer on each node—messages all other nodes requesting to become leader
	- Other nodes respond with algorithm
	- Periodic heartbeat from leader—new leader elected if not received
	- Raft DB—all nodes have copy, kept in sync
- Minimum number of available nodes required for Quorum, where $N$ is the total number of nodes:
$$
Quorum = floor(\frac{N}{2} +1)
$$
- Table of required quorum, per total number of nodes:

| Total num nodes | Quorum | Fault tolerance |
| --------------- | ------ | --------------- |
| 1               | 1      | 0               |
| 2               | 2      | 0               |
| 3               | 2      | 1               |
| 4               | 3      | 1               |
| 5               | 3      | 2               |
| 6               | 4      | 2               |
| 7               | 4      | 3               |

- 2 nodes no better than 1—both have no fault tolerance for node outage
- Same for 4 vs 3 and 6 vs 5

### Gossip Protocol

- Health, IO, CPU, memory—shared between nodes, detect outages

### KVDB

- Cluster config—single source of truth
- e.g. etcd

## Storage Pools

- Disks pooled by:
	- Size
	- Type e.g. magnetic, SSD etc.
	- IO Priority—performance, judged by Portworx benchmarking disks
		- High/medium/low
- Pool aggregated across all nodes in cluster
- RAID 0 by default—i.e. no striping or mirroring
	- RAID 10 (stripe of mirrors) available if >= 4 nodes in pool
- Min disk size—8 GB
- Max 32 pools per node

### Pool Rebalancing

- Moves volumes from over-utilized pools to under-utilised
- Attempts to bring all pools as close to mean utilization as possible
- Unbalanced pools: if >20% or <20% from mean utilization of cluster

## Volumes

- Create new volume from storage pool:

```bash
pxctl volume create <name> --nodes <nodes> --io_priority <high|medium|low> --size <size GB>
```

 - If no pool with desired IO Priority available—chooses a pool with a different IO Priority and downgrades/upgrades the volume specification

- Attach volume to node—attaches to node command is run on, can be run on any node in cluster

```bash
pxctl host mount <name> --path <mount path>
```

- Unmount and detach to move volume to another node

### Shared Volumes

- Default—block volumes
	- Can't be shared between nodes
- To create shared volumes, pass `--sharedv4 yes` flag to `pxctl volume create` command
- Volume can now be mounted on multiple nodes

### Aggregation Sets

- Default—volume associated to single pool on single node
- Aggregation sets—volume spans multiple nodes
	- Striped across disks, polls, and nodes
- To create, pass `--aggregation_level <1|2|3|auto>` to `pxctl volume create` command

### Replication Sets

- Replicate volumes
	- Max replicas = 3
- Default RAID 0 for pools—disk failure not tolerated
	- Require replication sets
- To create, pass `--repl <1|2|3>` to `pxctl volume create` command
- Replicas automatically distributed across:
	- Pools, nodes, racks, rows, DCs, zones, regions
- Synchronous replication—replicated before acknowledgement sent to client

## Installation

### Standalone

- Prerequisite—KVDB, e.g. etcd already installed
- Install via Docker

### Kubernetes

- If less than 25 nodes—Portworx can manage KVDB
	- Less overhead of managing etcd
- Options: [DaemonSet](notes/DaemonSet.md) or [Operator](notes/Kubernetes%20Operator%20Pattern.md)
- Generate installation spec at PX-Central
- Once deployed—scans disks attached to cluster
	- Aggregates to storage pools

#### Dynamic Provisioning

- Example: HA, 2 replicas (e.g. for Cassandra DB)
- Create Kubernetes StorageClass object, and specify in [StatefulSet](notes/StatefulSet.md) or PersistentVolume spec:

```yaml {title="storage-class.yaml"}
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: px-storageclass
provisioner: kubernetes.io/portworx-volume
parameters:
  repl: "2"
  priority_io: "high"
  group: "volgroup1"
  fg: "true"
```

## PXCTL

- CLI
- Manages:
	- Cluster
	- Volumes
	- Snapshots
	- Migration
	- Alerts
	- Secrets
	- Storage policy
	- Licences
	- Object stores
	- Roles
	- Credentials
	- Authentication

## PX-Central

- Multi-cluster management console
- Single pane of glass
- SaaS or on-prem

## PX-Autopilot

- Rules-based engine—responds to changes from monitoring source (Prometheus)
- Example rules:
	- Resize volumes based on used capacity
	- Resize pools based on used capacity
	- Rebalance storage if provisioned or used space within predefined range (e.g. <20% or >20% or mean usage)
- When resizing—done in a rolling upgrade fashion
- Configurable back-off period—don't trigger rule again within certain time period

## PX-Backup

- Backs up Kubernetes apps and data across 1 or more clusters
- Prerequisites: STORK 2.5+, Helm
- Generate config at PX-Central
- Can store backups in object storage e.g. S3
- Backup rules—select [Pods](notes/Pod.md) via labels
	- Actions—trigger command in Pod at time of backup
- Schedule—periodic, daily, weekly, monthly
- Create a backup:
	- What? Where? — Rules
	- When? How? — Schedules
