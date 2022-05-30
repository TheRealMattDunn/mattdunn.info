---
title: "GCP Cloud Security Command Center"
date: "2022-02-22"
tags:
- gcp
- security
---

## Overview

- Security management and risk platform
- Prevent, detect, respond
- Integrate and monitor many security services on GCP—also external services
- Identity compliance violations/misconfigurations, e.g. lax firewall rules
- Export to SIEMs (e.g. Splunk)

| Standard                                                                      | Premium                                                             |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Security Health Analytics e.g. public IPs                                     | Standard features, plus:                                            |
| [Web Security Scanner](notes/GCP%20Web%20Security%20Scanner.md)               | Managed scans e.g. old Java libs                                    |
| [Cloud Armor](notes/GCP%20Cloud%20Armor.md)                                   | [Event Threat Detection](notes/GCP%20Event%20Threat%20Detection.md) |
| [Cloud Data Loss Prevention](notes/GCP%20Cloud%20Data%20Loss%20Prevention.md) | Container Threat Detection                                          |
| Anomaly detection                                                             | Continuous exports to [Pub/Sub](notes/GCP%20Pub%20Sub.md)           |
| Foseti security integration (OSS tool)                                        |                                                                     |
