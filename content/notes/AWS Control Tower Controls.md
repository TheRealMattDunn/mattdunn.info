---
title: "Untitled"
date: "2023-01-17"
tags:
- aws
- management
- guardrails
---

## Overview

- High-level rules for governance of multi-account environment
	- Ongoing governance for entire AWS environment
- Expressed in plain language
- Applies to entire OU and all accounts within
- Preventative controls—stop actions, always compliant (except for accounts imported into Control Tower)
	- Implemented with [SCPs](notes/AWS%20Service%20Control%20Policies%20(SCPs).md)
	- States: enforced, not enabled
	- Available in all regions
- Detective controls—detect noncompliance of resources, notify on issues, can be noncompliant
	- Implemented with AWS Config Rules
	- States: clear, in violation, not enabled
	- Available in Control Tower-enabled regions only
- Guidance—mandatory, strongly recommended, elective
- Compliance—visible in [Control Tower](notes/moc/AWS%20Control%20Tower.md) console
	- Notifications via SNS and email—noisy, filter with Lambda or Event Bridge
