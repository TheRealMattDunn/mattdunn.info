---
title: "GCP Identity Aware Proxy"
date: "2022-02-22"
tags:
- gcp
- security
---

## Overview

- IAP
- Central authorization layer for HTTP applications
- Secure resources with authorization and authentication—enforces policies
- No VPN required
- Works with [GCP load balancers](notes/GCP%20Load%20Balancing.md) and [IAM](notes/GCP%20Cloud%20IAM.md)—only authenticated requests allowed
	- External load balancers—HTTPS
	- Internal load balancers—HTTP/S
- Works with [App Engine](notes/GCP%20App%20Engine.md), [Compute Engine](notes/GCP%20Compute%20Engine.md), [Kubernetes Engine](notes/GCP%20Kubernetes%20Engine%20(GKE).md), [Cloud Run](notes/GCP%20Cloud%20Run.md) and on-prem

## Signed Headers

- Secure app with signed headers
- IAP uses JSON Web Tokens (JWT) to ensure request to app is authorized
	- App ensures JWT is valid before responding
	- Additional security check
- Protects app from:
	- IAP being accidentally disabled
	- Misconfigured firewalls
	- Access from within project
- GCE and GKE health checks don't include JWT headers
	- Ensure check is skipped for health check paths
