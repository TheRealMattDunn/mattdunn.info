---
title: "GCP Load Balancers"
date: "2022-02-17"
tags:
- gcp
- networking
---

## Overview

| Type    | OSI Layer | Options                   | External | Internal | Locations              |
| ------- | --------- | ------------------------- | -------- | -------- | ---------------------- |
| HTTP(S) | Layer 7   | HTTP, HTTPS, HTTP/2       | Yes      | Yes      | Single or multi-region |
| TCP     | Layer 4   | TCP, SSL Proxy, TCP Proxy | Yes      | Yes      | Single or multi-region |
| UDP     | Layer 4   | UDP                       | Yes      | Yes      | Single-region          |
