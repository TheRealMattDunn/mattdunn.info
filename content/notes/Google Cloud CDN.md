---
title: "Google Cloud CDN"
date: "2022-02-21"
tags:
- gcp
- networking
---

## Overview

- Serve content closer to users
- Works with [external HTTP(S) load balancers](notes/GCP%20Load%20Balancing.md)
- HTTP caching—controlled with cache control header, or automatic caching of static content
- Sources:
	- Instance groups
	- Zonal [NEGs](notes/GCP%20Network%20Endpoint%20Groups.md)
	- Serverless NEGs (e.g. [App Engine](notes/Google%20App%20Engine.md), [Cloud Functions](notes/Google%20Cloud%20Functions.md))
	- [Cloud Storage](notes/Google%20Cloud%20Storage.md)
	- (Custom origins not allowed)

## CDN Interconnect

- Low latency connectivity to certain CDN providers, with lower egress fees
	- Akami, Verizon, Cloudflare, Fastly
- Pull and push cache fills
- Best for:
	- High volume egress—lower costs
	- Frequent content updates—lower latency

# References

- [GCP Services](notes/GCP%20Services.md)
