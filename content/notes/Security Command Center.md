---
title: Security Command Center
date: 2022-02-22
last-modified: 2023-12-21
tags:
  - google-cloud
  - security
---

## Overview

- Security management and risk platform
- Prevent, detect, respond
- Integrate and monitor many security services on Google Cloud—also external services
- Identity compliance violations/misconfigurations, e.g. lax firewall rules
- Export to SIEMs (e.g. Splunk)

| Standard                                                                | Premium                                                       |
| ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| Security Health Analytics e.g. public IPs                               | Standard features, plus:                                      |
| [Web Security Scanner](notes/Web%20Security%20Scanner.md)               | Managed scans e.g. old Java libs                              |
| [Cloud Armor](notes/Cloud%20Armor.md)                                   | [Event Threat Detection](notes/Event%20Threat%20Detection.md) |
| [Cloud Data Loss Prevention](notes/Cloud%20Data%20Loss%20Prevention.md) | Container Threat Detection                                    |
| Anomaly detection                                                       | Continuous exports to [Pub/Sub](notes/Pub%20Sub.md)           |
| Foseti security integration (OSS tool)                                  |                                                               |
