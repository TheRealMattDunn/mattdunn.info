---
title: Workload Identity Federation
date: 2024-01-17
last-modified: 2024-01-17
tags:
  - google-cloud
  - iam
  - security
---

## Overview

- Grant on-premises/multi-cloud workloads access to [Google Cloud](notes/moc/Google%20Cloud.md) resources
	- Grant external resources [Cloud IAM](notes/Cloud%20IAM.md) roles
- Removes need to Service Account keys
	- Power creds
	- Security risk
- Workload Identity Pools
	- Entity to manage external identities
	- Recommended: new pool for each non-Google Cloud environment requiring access—e.g. dev, staging, prod etc.
- Workload Identity Pool Providers
	- Describe relationship between Google Cloud and IdP
	- Options (any provider that supports OpenID Connect (OIDC)):
		- [AWS](notes/moc/AWS.md)
		- [Azure](notes/moc/Azure.md) Active Directory
		- On-prem Active Directory Federation Services (ADFS)
		- Okta
		- [Kubernetes](notes/moc/Kubernetes.md) clusters
- Follows OAuth 2.0 token exchange spec
	- Provide creds from IdP to Security Token Service—returns federated token
- If workload doesn't have public OIDC endpoint
	- Upload JSON Web Key Sets (JWKS) directly to pool
	- e.g. [Terraform](notes/moc/Terraform.md) or GitHub Enterprise hosted in own environment
	- e.g. For regulator requirements

### Service Account Impersonation

- Use federated access token to obtain short-lived OAuth 2.0 access token
- Use to impersonate service account
- Grant external identity `roles/iam.workloadIdentityUser` on service account with roles required by workload