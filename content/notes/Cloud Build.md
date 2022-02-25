---
title: "Cloud Build"
date: "2022-02-25"
tags:
- gcp
- ci/cd
---

## Service Account

- Uses special service account to execute builds—created when Cloud Build API is enabled
- Email in form of <PROJECT_ID>@cloudbuild.gserviceaccount.com
- Initially has the Cloud Build Service Account role
	- Can grant additional roles in the Cloud Build console, e.g., Cloud Run Admin, Cloud KMS Crypto Key Decrypter, etc.
	- Can also grant any role in [IAM](notes/Cloud%20IAM.md)

# References

- [GCP Services](notes/GCP%20Services.md)
