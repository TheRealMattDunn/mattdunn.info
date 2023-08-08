---
title: "GCP Cloud KMS"
date: "2022-02-22"
tags:
- gcp
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

# References

- [GCP CMEK and CSEK](notes/GCP%20CMEK%20and%20CSEK.md)
- [GCP Decision Trees](notes/moc/GCP%20Decision%20Trees.md)
