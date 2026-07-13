---
title: "AWS Control Tower Account Management"
date: "2023-01-17"
tags:
- aws
- management
---

## Overview

- Four methods for account provisioning in [Control Tower](notes/moc/AWS%20Control%20Tower.md):
	- Two console based: Account Factory; enroll account
	- Two automated: Automated account provisioning with IAM roles (e.g. with Lambda); Account Factory for Terraform
- Steps:
	1. Initiate request e.g. Account Factory calls [Service Catalog](notes/AWS%20Service%20Catalog.md)
	2. Service Catalog calls Control Tower
	3. Control Tower workflow—calls [AWS Organizations](notes/AWS%20Organization%20Hierarchy.md) CreateAccount API
	4. Control Tower applies blueprints and [Controls](notes/AWS%20Control%20Tower%20Controls.md)
	5. Service Catalog polls Control Tower for progress
	6. When complete—Service Catalog finalizes state and informs requester of result