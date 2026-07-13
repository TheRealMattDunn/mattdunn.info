---
title: "Ceph"
date: "2022-10-17"
tags:
- storage
- software defined storage
---

## Overview

- Software defined storage
- Clustered
- OSD—object storage daemon
	- Lives on each server in the cluster
- Scaling:
	- Vertical—add more drives to each server
	- Horizontal—add more servers

### When to Consider

- &gt;20 TB
- Problems with growing storage by just adding more servers:
	- Newest data goes onto the newest drives—this is also generally accessed the most frequently
		- Hot spots
	- Single points of failure

## Ceph Clustering

- Min. 3x servers
- Manages storage in a single virtual space
- Server failure domain—can lose a server
- HA
- Constant load balancing across storage nodes
	- Performances scales linearly as more drives added

## Storage Pools

![ceph_storage_pools](files/ceph_storage_pools.svg)

- Built on top of Ceph
	- Virtual storage space
- Can share:
	- File system
	- Block access (iSCSI)
	- Object storage (S3)

## Data Security

- Redundancy at multiple levels:
	- HDD—analogous to RAID
	- Server—HA, can take server offline at any time

### Server Failure Domain

- Set at pool level
- Schemes:
	- Replication
		- High data security
		- Low data storage efficiency—50%
		- Mirroring—like RAID1
		- e.g. setup pool: 2-replica, FD-server
		- Can increase number of replicas e.g. 3-replica (requires fast network)
	- Erasure coding
		- e.g. EC 2+1—like RAID5
			- 2 bits, 1 parity bit—66% efficiency
		- e.g EC 2+2—like RAID6
