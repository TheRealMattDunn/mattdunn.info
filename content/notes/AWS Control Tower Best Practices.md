---
title: "AWS Control Tower Best Practices"
date: "2023-01-17"
tags:
- aws
- management
- best-practices
---

## Best Practices

- Only one Control Tower allowed per Organization
	- Create a new Organization during setup, or add to an existing Organization
- Use multiple accounts
	- Security controls
	- Workload and data isolation
	- Multiple teams
	- Business processes—different accounts for difference business needs
	- Billing—separate billable items across business units etc.
	- Quota allocations—set up on per-account basis
- Use multiple OUs
	- Apply security controls and guardrails at the OU level—grouping of similar accounts
- Do not add tags to resources created by Control Tower—not supported
- Decide on user access ahead of time
	- Restrict access to `AWSControlTowerAdmin` role
