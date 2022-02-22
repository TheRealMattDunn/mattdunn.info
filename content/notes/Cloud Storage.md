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

- [GCP Object and File Storage](notes/GCP%20Object%20and%20File%20Storage.md)
