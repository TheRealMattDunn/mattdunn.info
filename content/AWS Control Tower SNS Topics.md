---
title: "AWS Control Tower SNS Topics"
date: "2023-01-17"
tags:
- aws
- management
---

## Overview

- `aws-controltower-AllConfigNotifications`
	- AWS Config compliance and changes
	- CloudTrail events
	- Aggregated from all child accounts
- `aws-controltower-SecurityNotifications`
	- AWS Config compliance for region
	- Lambda function forwards notifications to `aws-controltower-AggregateSecurityNotifications`
- `aws-controltower-AggregateSecurityNotifications`
	- Receives notifications via Lambda function from `aws-controltower-SecurityNotifications`
	- Drift notifications for home region
