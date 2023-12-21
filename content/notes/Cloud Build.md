---
title: Cloud Build
date: 2022-02-25
last-modified: 2023-12-21
tags:
  - google-cloud
  - ci/cd
---

## Service Account

- Uses special service account to execute builds—created when Cloud Build API is enabled
- Email in form of <PROJECT_ID>@cloudbuild.gserviceaccount.com
- Initially has the Cloud Build Service Account role
	- Can grant additional roles in the Cloud Build console, e.g. Cloud Run Admin, Cloud KMS Crypto Key Decrypter, etc.
	- Can also grant any role in [IAM](notes/Cloud%20IAM.md)
