---
title: gsutil
date: 2022-03-07
last-modified: 2023-12-21
tags:
  - google-cloud
  - data
  - storage
  - tools
---

## Versioning

Get the current versioning state:

```bash
gsutil versioning get gs://<BUCKET_NAME>
```

Enable versioning:

```bash
gsutil versioning set on gs://<BUCKET_NAME>
```

Upon deleting a file—version still exists. To view:

```bash
gsutil ls -a gs://<BUCKET_NAME>/<FOLDER>
```

Version format: `gs://<BUCKT_NAME>/<FILE_PATH>#<GENERATION_NUM>`

Restore a version:

```bash
# Can also use cp here
gsutil mv gs://<BUCKT_NAME>/<FILE_PATH>#<GENERATION_NUM> gs://<BUCKET_NAME>/<FILE_PATH>
```

## Parallel Composite Uploads

Split large file into up to 32 chunks, and upload in parallel:

```bash
gsutil -o GSUtil:parallel_composite_upload_threshold=150M cp <SRC_FILE> gs://<BUCKET_NAME>/<FILE_PATH>
```

## Multi-Threaded Uploads

Upload many files in parallel:

```bash
gsutil -m cp <SRC_FILES> gs://<BUCKET_NAME>/<FILE_PATH>
```

## Performance Diagnostics

Run a suite of diagnostic tests for a give storage bucket:

```bash
gsutil perfdiag gs://<BUCKET_NAME>/<FILE_PATH>
```
