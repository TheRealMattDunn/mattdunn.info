---
title: Cloud EKM
date: 2022-02-22
last-modified: 2023-10-23
tags:
  - google-cloud
  - security
---

## Overview

- Cloud External Key Manager
- Keys from external key management partners
- Works only with services which support customer managed encryption keys (CMEKs), e.g.: [BigQuery](BigQuery.md), [Compute Engine](Compute%20Engine.md), [Cloud Run](Cloud%20Run.md), [Cloud Spanner](Cloud%20Spanner.md), [Cloud Storage](Cloud%20Storage.md), [Kubernetes Engine](Kubernetes%20Engine%20(GKE).md), [Pub/Sub](Pub%20Sub.md), [Secret Manager](Secret%20Manager.md)
- Benefits:
	- Key provenance
	- Keys never cached or stored in Google Cloud
	- Access control
	- Centralized key management
