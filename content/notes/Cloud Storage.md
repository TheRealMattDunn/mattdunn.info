---
title: "Cloud Storage"
date: "2022-02-16"
tags:
- gcp
- data
- storage
---

## Overview

- Infinitely scalable
- Highly durable (99.9999999%—eleven 9s)
- Unstructured data—images, videos etc.
- Data stored in buckets—regional or multi-regional
- Folder structure
- Object versioning—mutable files
- Permissions: bucket or object level
- Lifecycle management
	- Rules to move objects between storage classes, or delete

## Storage Classes

| Class    | Usage                               |
| -------- | ----------------------------------- |
| Standard | Most frequency accessed data        |
| Nearline | Data accessed once per month        |
| Coldline | Data accessed once per quarter      |
| Archive  | Data accessed once per year or less |

# References

- [GCP Object and File Storage](notes/GCP%20Object%20and%20File%20Storage.md)
