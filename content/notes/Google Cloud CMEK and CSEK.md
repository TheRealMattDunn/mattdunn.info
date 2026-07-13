---
title: Google Cloud CMEK and CSEK
date: 2022-02-23
last-modified: 2023-10-23
tags:
  - google-cloud
  - security
  - encryption
---

## Overview

### Customer Managed Encryption Keys (CMEK)

- Key created and managed with [Cloud KMS](notes/Cloud%20KMS.md)
- Assigned to resource
- Alternative to Google managed keys
- Not necessarily more secure:
	- Incurs more costs than Google managed
	- Can control lifecycle of keys

### Customer Supplied Encryption Keys (CSEK)

- Customer specifies contents of key material
- Keys stored on-prem, or in external service
- Compatibale with [Cloud Storage](notes/Cloud%20Storage.md) and [Compute Engine](notes/Compute%20Engine.md)
