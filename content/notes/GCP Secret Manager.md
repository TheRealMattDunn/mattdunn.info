---
title: "GCP Secret Manager"
date: "2022-02-22"
tags:
- gcp
- security
---

## Overview

- Store, manage, access secrets as blobs or strings
- Passwords, API keys, TLS certs etc.
- Data immutible
	- New versions created with each modification
- Best practices
	- Principle of least privilege
	- Limit access with IAM
	- Use Secret Manager API instead of environment variables
	- Reference secrets by version number
