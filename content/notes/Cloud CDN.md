---
title: Cloud CDN
date: 2022-02-21
last-modified: 2023-10-23
tags:
  - google-cloud
  - networking
---

## Overview

- Serve content closer to users
- Suitable for frequently accessed data
- Works with [external HTTP(S) load balancers](notes/Google%20Cloud%20Load%20Balancing.md)
- HTTP caching—controlled with cache control header, or automatic caching of static content
- Sources:
	- Instance groups
	- Zonal [NEGs](notes/Network%20Endpoint%20Groups.md)
	- Serverless NEGs (e.g. [App Engine](notes/App%20Engine.md), [Cloud Functions](notes/Cloud%20Functions.md))
	- [Cloud Storage](notes/Cloud%20Storage.md)
	- (Custom origins not allowed)

## CDN Interconnect

- Low latency connectivity to certain CDN providers, with lower egress fees
	- Akami, Verizon, Cloudflare, Fastly
- Pull and push cache fills
- Best for:
	- High volume egress—lower costs
	- Frequent content updates—lower latency
