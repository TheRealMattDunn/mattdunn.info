---
title: "Identity Aware Proxy"
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
- Works with [GCP load balancers](notes/GCP%20Load%20Balancing.md) and [IAM](notes/Cloud%20IAM.md)—only authenticated requests allowed
	- External load balancers—HTTPS
	- Internal load balancers—HTTP/S
- Works with [App Engine](notes/App%20Engine.md), [Compute Engine](notes/Compute%20Engine.md), [Kubernetes Engine](notes/Kubernetes%20Engine.md), [Cloud Run](notes/Cloud%20Run.md) and on-prem

# References

- [GCP Services](notes/GCP%20Services.md)
