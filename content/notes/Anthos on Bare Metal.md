---
title: Anthos on Bare Metal
date: 2022-02-18
last-modified: 2023-12-21
tags:
  - google-cloud
  - anthos
  - kubernetes
---

## Overview

- Install [Anthos](notes/Anthos.md) clusters directly on your own hardware
	- Use of specialized hardware
- Use existing data centres
	- Anthos manages app deployment and health
	- More efficient operations
- Customized security

## Deployment Models

- Admin clusters
	- Create, modify, manage and delete user clusters
- User clusters
	- Run workloads

### Standalone

- Single cluster—both and admin and user cluster in one
- Best for:
	- Edge locations
	- Single teams and workload types

### Multi-Cluster

- Admin cluster plus one or more user clusters
- Best for:
	- Team separation
	- Environment separation

### Hybrid

- Admin cluster plus one or more user clusters
- Admin cluster also runs user workloads
- Created from pre-existing standalone clusters
- No security concerns about workloads running on the admin cluster

## Operating

- Connect—component which associates Anthos on Bare Metal clusters with Google Cloud
	- Allows health of clusters to be visiable in Cloud Console
