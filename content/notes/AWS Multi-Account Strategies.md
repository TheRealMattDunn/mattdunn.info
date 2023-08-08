---
title: "AWS Multi-Account Strategies"
date: "2022-02-23"
tags:
- aws
- cloud architecture
---

## Why?

- Many teams
- Isolation between workloads
- Security/compliance controls—resource boundaries
- Billing separation
- API limits/throttling
- [Control Tower](notes/moc/AWS%20Control%20Tower.md)—orchestration framework for dealing with large numbers of accounts

## Best Practice Design

![aws_example_ou_design](files/aws_example_ou_design.svg)

### Organization Master Account

- No connection to DC
- Manages [OUs](notes/AWS%20Organization%20Hierarchy.md) and [SCPs](notes/AWS%20Service%20Control%20Policies%20(SCPs).md)
- Consolodated billing
- Contains minimal resources—no workloads, as these pose a security risk to the OUs and SCPs

### Foundational OUs

- Building blocks for lower-level OUs

#### Security OU

- Accounts:
	- Log archive
		- Record everything happening in the accounts—CloudTrail, single source of truth
		- Limited access—alarm on user login
	- Security break glass
		- Emergency access for security team
	- Security read-only
		- Security audit account, with read-only access to other accounts via cross-account roles
	- Security tooling
		- e.g. SIEM

#### Infrastructure OU

- Accounts:
	- Shared services
		- DNS
		- LDAP/Active Directory integration
		- Golden AMIs
		- Pipelines
		- Scanning infrastructure
		- Monitoring
		- Limited access
	- Network
		- VPCs
		- Transit gateways
		- VPNs
		- etc.

### Additional OUs

#### Sandbox OU

- Freedom to developers to experiment
- Fixed spending limits
- Disconnected from network

#### Workload OU(s)

- Where workloads run
- Split into non-prod and prod sub-OUs
- Separate OUs for e.g. PCI-DSS workloads—with associated guardrails
- Limited access—automated deployments

#### Policy Staging OU

- Used to test effect of SCPs

#### Suspended OU

- Deny all policy
- Accounts moved into here to block all actions
	- Account closure
	- Compromised accounts

#### Individual Business Users OU

- User access to shared resources, e.g. S3

#### Exceptions OU

- Used for accounts that don't fit into existing OUs
- No limits or SCPs
- One account per workload—as much isolation as possible
- Strict approval
- Extremely limited access
