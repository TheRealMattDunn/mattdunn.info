---
title: Google Cloud Annotations
date: 2022-02-09
last-modified: 2023-10-23
tags:
  - cloud-architecture
  - google-cloud
---

## Security Marks

- For compliance purposes
- Adds business context to assets
- Adds additional layer of security
- Applied in the [Security Command Center](notes/Security%20Command%20Center.md)
	- CSCC also works with labels and network tags
- Organization, project, or resource level

## Labels

- Key-value pairs
- Use cases:
	- Attribute resources to teams or cost-centres
	- Identify environments
	- Cost/billing allocation
	- Group resources to monitoring and analytics by operations
- Can apply to projects, but not folders

## Network Tags

- Applied to VM instances
- Used in firewall rules and network routes

## Flow Chart

![Flow chart](files/annotations.svg)
