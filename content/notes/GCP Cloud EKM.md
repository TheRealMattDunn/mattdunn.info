---
title: "GCP Cloud EKM"
date: "2022-02-22"
tags:
- gcp
- security
---

## Overview

- Cloud External Key Manager
- Keys from external key management partners
- Works only with services which support customer managed encryption keys (CMEKs), e.g.: [BigQuery](notes/GCP%20BigQuery.md), [Compute Engine](notes/GCP%20Compute%20Engine.md), [Cloud Run](notes/GCP%20Cloud%20Run.md), [Cloud Spanner](notes/GCP%20Cloud%20Spanner.md), [Cloud Storage](notes/GCP%20Cloud%20Storage.md), [Kubernetes Engine](notes/GCP%20Kubernetes%20Engine%20(GKE).md), [Pub/Sub](notes/GCP%20Pub%20Sub.md), [Secret Manager](notes/GCP%20Secret%20Manager.md)
- Benefits:
	- Key provenance
	- Keys never cached or stored in GCP
	- Access control
	- Centralized key management
