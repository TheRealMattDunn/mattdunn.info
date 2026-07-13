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
- Works only with services which support customer managed encryption keys (CMEKs), e.g.: [BigQuery](notes/BigQuery.md), [Compute Engine](notes/Compute%20Engine.md), [Cloud Run](notes/Cloud%20Run.md), [Cloud Spanner](notes/Cloud%20Spanner.md), [Cloud Storage](notes/Cloud%20Storage.md), [Kubernetes Engine](notes/Kubernetes%20Engine%20(GKE).md), [Pub/Sub](notes/Pub%20Sub.md), [Secret Manager](notes/Secret%20Manager.md)
- Benefits:
	- Key provenance
	- Keys never cached or stored in Google Cloud
	- Access control
	- Centralized key management
