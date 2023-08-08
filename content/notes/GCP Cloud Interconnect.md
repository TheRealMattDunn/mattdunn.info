---
title: "GCP Cloud Interconnect"
date: "2022-02-22"
tags:
- gcp
- networking
---

## Overview

- Extend on-prem network to GCP [VPC](notes/GCP%20VPCs.md)

| Dedicated Interconnect                                | Partner Interconnect                               |
| ----------------------------------------------------- | -------------------------------------------------- |
| Direct physical connection to GCP                     | Connect via intermediary                           |
| High bandwidth needs                                  | Lower bandwidth needs                              |
| 10 Gbps or 100 Gbps circuits                          | Depends on partner capabilities                    |
| 50 Mbps – 50 Gbps capacities                          | 50 Mbps – 50 Gbps capacities                       |
| Traffic not encrypted (application layer optional)    | Traffic not encrypted (application layer optional) |
| [Cloud VPN](notes/GCP%20Cloud%20VPN.md) not supported | Cloud VPN not supported                            |
