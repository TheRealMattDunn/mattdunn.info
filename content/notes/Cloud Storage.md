---
title: Cloud Storage
date: 2022-02-16
last-modified: 2023-12-21
tags:
  - google-cloud
  - data
  - storage
---

## Overview

- Object storage
	- Not suitable for file-based storage applications
- Infinitely scalable
- Highly durable (99.9999999%—eleven 9s)
- Unstructured data—images, videos etc.
- Data stored in buckets
- Regional, dual-regional or multi-regional
	- Instant redundancy within a single region
	- Asynchronous redundancy between dual or multi-regions
	- Use to optimize latency and bandwidth considerations for users
- Folder structure
- Object versioning—mutable files
- Permissions: bucket or object level
- Lifecycle management
	- Rules to move objects between storage classes, or delete
- Signed URLs—grant temporary access to specific objects
	- Programmatically sign strings within application
	- Or use App Engine App Identity service to sign from within [App Engine](notes/App%20Engine.md)
- Retention policies, policy locks, object holds—useful for regulated data
- [gsutil](notes/gsutil.md) tool

## Storage Classes

| Class    | Minimum Storage Period | Pricing                        |
| -------- | ---------------------- | ------------------------------ |
| Standard | None                   | Based on storage               |
| Nearline | 30 days                | Based on storage and retrieval |
| Coldline | 90 days                | Based on storage and retrieval |
| Archive  | 365 days               | Based on storage and retrieval |

## Storage Transfer Service

- Transfer large amounts of data to Cloud storage — online data
	- AWS S3, HTTP(S) sources, other Cloud Storage buckets, on-prem (agent-based)

## References

- [Google Cloud Decision Trees](notes/moc/Google%20Cloud%20Decision%20Trees.md)
