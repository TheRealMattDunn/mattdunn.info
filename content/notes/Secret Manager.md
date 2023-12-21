---
title: Secret Manager
date: 2022-02-22
last-modified: 2023-12-21
tags:
  - google-cloud
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
