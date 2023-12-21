---
title: Cloud Interconnect
date: 2022-02-22
last-modified: 2023-12-21
tags:
  - google-cloud
  - networking
---

## Overview

- Extend on-prem network to Google Cloud [VPC](notes/Google%20Cloud%20VPCs.md)

| Dedicated Interconnect                             | Partner Interconnect                               |
| -------------------------------------------------- | -------------------------------------------------- |
| Direct physical connection to Google Cloud         | Connect via intermediary                           |
| High bandwidth needs                               | Lower bandwidth needs                              |
| 10 Gbps or 100 Gbps circuits                       | Depends on partner capabilities                    |
| 50 Mbps – 50 Gbps capacities                       | 50 Mbps – 50 Gbps capacities                       |
| Traffic not encrypted (application layer optional) | Traffic not encrypted (application layer optional) |
| [Cloud VPN](notes/Cloud%20VPN.md) not supported    | Cloud VPN not supported                            |
