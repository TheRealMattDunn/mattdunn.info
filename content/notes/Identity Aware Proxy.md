---
title: Identity Aware Proxy
date: 2022-02-22
last-modified: 2023-10-23
tags:
  - google-cloud
  - security
---

## Overview

- IAP
- Central authorization layer for HTTP applications
- Secure resources with authorization and authentication—enforces policies
- No VPN required
- Works with [Google *Cloud* load balancers](notes/Google%20Cloud%20Load%20Balancing.md) and [IAM](notes/Cloud%20IAM.md)—only authenticated requests allowed
	- External load balancers—HTTPS
	- Internal load balancers—HTTP/S
- Works with [App Engine](notes/App%20Engine.md), [Compute Engine](notes/Compute%20Engine.md), [Kubernetes Engine](notes/Kubernetes%20Engine%20(GKE).md), [Cloud Run](notes/Cloud%20Run.md) and on-prem

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
