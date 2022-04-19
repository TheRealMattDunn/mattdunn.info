---
title: "Control Tower"
date: "2022-02-23"
tags:
- aws
- management
---

## Overview

- Automate the setup of new [AWS multi-account environments](notes/AWS%20Multi-Account%20Strategies.md)
- Best practices
- Managed service
	- Replaces AWS Landing Zone solution
- Dashboard for monitoring compliance with guardrails across [OUs](notes/AWS%20Organizational%20Units.md) and accounts enrolled in Control Tower
- ~1 hour setup:
	- Create master account
	- Enable Control Tower in desired region with configuration
	- Creates two additional accounts: Log Archive and Audit

![aws_control_tower_landing_zone](/files/aws_control_tower_landing_zone.svg)

## Guardrails

- High-level rules for governance of multi-account environment
- Implemented with SCPs
- Preventative guardrails—stop actions, always compliant (except for accounts imported into Control Tower)
- Detective guardrails—detect noncompliance of resources, notify on issues, can be noncompliant

## Account Factory

- Allows creation of new accounts, and enrolment into Control Tower

## SSO

- Centralized and federated access management across all accounts
- Preconfigured or custom user groups
- Integrates with third-party ID providers (e.g. Active Directory)

## Service Catalog

- Private marketplace
- Allows users to provision compliant accounts and resources—self-service
- Resources created centrally and shared with wider organization
	- Delegate the creation of individual resources to end-users and teams
- Infrastructure-as-code
- Example:
	- A user without permission to manually create EC2 instances can create them using predefined approved templates from the Service Catalog
