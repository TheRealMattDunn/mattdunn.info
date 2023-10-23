---
title: NetApp Cloud Volumes ONTAP
date: 2023-01-30
last-modified: 2023-10-23
tags:
  - storage
  - cloud
---

## Overview

- Optimize cloud storage costs and performance
- Enhance data protection, security, and compliance
- Move data between clouds
	- Same storage architecture across [AWS](notes/moc/AWS.md), [Azure](notes/moc/Azure.md), and [Google Cloud](notes/moc/Google%20Cloud.md)
- Software-only appliance
	- Runs [ONTAP](notes/NetApp%20ONTAP.md) data management software on cloud

### Key Features

- Storage efficiency
	- Data deduplication, compression, thin provisioning, cloning
- Protocols:
	- NFS, SMB, iSCSI, S3
- High-availability
- Data protection
	- SnapMirror—replicates on-prem data to cloud at high-speed
	- Cloud Backup—BlueXP
- Data tiering
	- High/low performance storage pools
- Application consistency
	- SnapCenter
- Data security
	- Encryption
	- Virus/ransomware protection
- Privacy compliance controls
	- Integration with Cloud Data Sense—understand data context and identify sensitive data

### Editions

- Freemium
	- 500GB ONTAP storage free
- Optimized
	- ONTAP storage—low I/O
- Essentials primary
	- High I/O
- Professional
	- ONTAP stoage + backup

## Disks and Aggregates

- Uses cloud storage disks—grouped into aggregates
- Aggregates provide storage to one or more volumes

![cvo_aggregates](files/cvo_aggregates.svg)

## Tiering

- AWS:
	- Local NVMe—flash cache
	- EBS—user data
	- S3—cold tier
- Azure:
	- Azure Managed Disks—user data
	- Azure Blob Storage—cold tier
- Google Cloud:
	- [Persistent Disks](notes/Compute%20Engine%20Persistent%20Disks.md)—user data
	- [Cloud Storage](notes/Cloud%20Storage.md)—cold tier

### Tiering Policies

- `snapshot-only`
	- Cold snapshots moved to cold tier
	- Default cooling-off period: 2 days (configurable)
	- Moved to hot tier when accessed (if space available)
- `all`
	- All data immediately moved to cold tier
- `auto`
	- Cold user data and snapshots
	- Default cooling-off period: 31 days (configurable)
- `none`
	- No data moved to the cold tier

## Write Speeds

- Normal—data written directly to disk
- High—data buffered in memory
	- Potential for data loss if system outage

## HA Pairs

- Data synchronously mirrored between two nodes
- Uses mediator instances—comms between instances
- RPO—0 sec
- RTO—60 sec
- Multi or single AZs
- Active-active
	- Read performance higher than single node
	- Write performance same/higher than single node
- Active-passive
	- Read performance comparable to single node
	- Write performance lower than single node

## Security

- Encryption at rest
	- NetApp encryption—NetApp Volume Encryption (NVE), NetApp Aggregate Encryption (NAE)
	- AWS KMS
	- Azure SSE
	- Google Cloud default encryption
- Can use NetApp encryption alongside native
	- Doubly encypted—sensitive data
- Virus scanning—Vscan
- Ransomware protection
	- Readonly snapshots
	- [BlueXP](notes/NetApp%20BlueXP.md) detects volumes not protected by snapshot policy