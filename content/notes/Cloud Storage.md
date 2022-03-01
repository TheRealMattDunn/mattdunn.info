---
title: "Cloud Storage"
date: "2022-02-16"
tags:
- gcp
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

## Storage Classes

| Class    | Minimum Storage Period | Pricing                        |
| -------- | ---------------------- | ------------------------------ |
| Standard | None                   | Based on storage               |
| Nearline | 30 days                | Based on storage and retrieval |
| Coldline | 90 days                | Based on storage and retrieval |
| Archive  | 365 days               | Based on storage and retrieval |

## Versioning

Get the current versioning state:

````
gsutil versioning get gs://<BUCKET_NAME>
````

Enable versioning:

````
gsutil versioning set on gs://<BUCKET_NAME>
````

Upon deleting a file—version still exists. To view:

````
gsutil ls -a gs://<BUCKET_NAME>/<FOLDER>
````

Version format: `gs://<BUCKT_NAME>/<FILE_PATH>#<GENERATION_NUM>`

Restore a version:

````
# Can also use cp here
gsutil mv gs://<BUCKT_NAME>/<FILE_PATH>#<GENERATION_NUM> gs://<BUCKT_NAME>/<FILE_PATH>
````

# References

- [GCP Decision Trees](notes/GCP%20Decision%20Trees.md)
