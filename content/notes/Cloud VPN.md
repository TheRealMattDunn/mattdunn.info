---
title: Cloud VPN
date: 2022-02-22
last-modified: 2023-12-21
tags:
  - google-cloud
  - networking
---

## Overview

- Traffic encrypted between client and Google Cloud by IPsec gateways
- Static IP required—dynamic "dial-in" connections not supported
- Best practices:
	- Keep Cloud VPN in its own project
	- Use dynamic routing and BGP
	- Apply secure firewall rules
	- Use strong pre-shared keys
