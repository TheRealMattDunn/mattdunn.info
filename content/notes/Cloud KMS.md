---
title: Cloud KMS
date: 2022-02-22
last-modified: 2023-12-21
tags:
  - google-cloud
  - security
  - encryption
---

## Overview

- Generate, manage and apply encryption keys
- HA, low latency
- Encrypt and decrypt only—does not store secrets
- Access control to keys
- Supports:
	- Symmetrical keys (e.g. AES)—same key for encryption/decryption
	- Asymmetrical keys (e.g. RSA)—different key for encryption/decryption
- 24 hour delay for key material destruction—prevents accidental or malicious destruction
- Automatic rotation of symmetric keys (asymmetric keys can't be automatically rotated—additional steps required)

## References

- [Google Cloud CMEK and CSEK](notes/Google%20Cloud%20CMEK%20and%20CSEK.md)
- [Google Cloud Decision Trees](notes/moc/Google%20Cloud%20Decision%20Trees.md)
