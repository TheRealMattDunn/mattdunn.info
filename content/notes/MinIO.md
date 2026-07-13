---
title: "MinIO"
date: "2022-11-09"
tags:
- kubernetes
- storage
---

## Overview

- S3-compatible object storage
	- REST: GET, PUT, DELETE
- [Kubernetes](notes/moc/Kubernetes.md)-native
- Software defined
- Deploy to: Kubernetes, Tanzu, OpenShift, Rancher, EKS, AKS, GKE
- UI, CLI, API
- Metrics—Prometheus
- Logging—every operation
- Erasure coding—resilience
	- Data + parity
	- Reed-Solomon algorithm
	- Can tolerate $\frac{N}{2} - 1$ drive outages

## Features

### Multi-Site Active-Active Replication

- Synchronous and near-synchronous replication (depending on architecture)
	- 2 data centres recommended—possible to do more, but complex
- Applications can access any replica directly
	- Failover to other replica on outage

### Global IAM

- Compatible with AWS IAM policies
- Internal identity provider option
- Also support for external identity providers:
	- Active Directory, LDAP, Okta, Keycloak, Facebook, Google

### Encryption

- At rest
	- Compatible with S3 semantics (SSE-S3)
	- Supports: Vault, Thales CiperTrust
- At transit—TLS 1.2+

### Object Immutability

- Object retention periods

### Bucket and Object Versioning

- S3-compatible
- Unique ID for each version of object
	- Eliminates need for snapshots
- Enabled at bucket level

### Data Lifecycle Management and Tiering

- Object expiration
	- Use with versioning to expire old versions—reduce storage usage
- Tiering
	- Policy-based—transition between storage classes based on e.g. time and frequency of access
	- Across storage mediums
	- Across cloud—use public cloud as warm/cold tier
	- Within cloud—use block storage as hot tier

### Scaling

- Horizontal scaling
	- Via server pools—independent set of nodes with own compute, network and storage, failure domains
- Rebalancing not required
- Operates on heterogeneous infrastructure
