---
title: "GCP Cloud Armor"
date: "2022-02-22"
tags:
- gcp
- security
---

## Overview

- DDoS protection
- WAF
- Automatically enabled for [HTTP(S), SSL Proxy and TCP Proxy load balancers](notes/GCP%20Load%20Balancing.md)
- Mitigates OWASP's top 10 list, e.g.:
	- Broken authentication
	- SQL injection
	- XSS
- Allow/deny traffic by IP/CIDR
- Preview changes
- Configure WAF rules to reduce false positives
- Reference named IP lists published by CDN partners, e.g. Fastly, Cloudflare etc.
