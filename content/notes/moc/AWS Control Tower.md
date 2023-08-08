---
title: "AWS Control Tower"
date: "2022-02-23"
tags:
- aws
- management
- moc
---

## Topics

- [Control Tower Best Practices](notes/AWS%20Control%20Tower%20Best%20Practices.md)
- [Controls](notes/AWS%20Control%20Tower%20Controls.md)
- [IAM Identity Center](notes/AWS%20IAM%20Identity%20Center.md)
- [Service Catalog](notes/AWS%20Service%20Catalog.md)
- [Control Tower SNS Topics](notes/AWS%20Control%20Tower%20SNS%20Topics.md)
- [AWS Control Tower Account Management](notes/AWS%20Control%20Tower%20Account%20Management.md)

## Overview

- Automate the setup of new [AWS multi-account environments](notes/AWS%20Multi-Account%20Strategies.md)
- Best practices
- Managed service
	- Replaces AWS Landing Zone solution
- Dashboard for monitoring compliance with guardrails across [OUs](notes/AWS%20Organization%20Hierarchy.md) and accounts enrolled in Control Tower
- ~1 hour setup:
	- Create master account
	- Enable Control Tower in desired region with configuration
	- Creates two additional accounts: Log Archive and Audit

![aws_control_tower_landing_zone](files/aws_control_tower_landing_zone.svg)
