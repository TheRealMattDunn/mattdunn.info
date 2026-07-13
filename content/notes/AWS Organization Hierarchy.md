---
title: "AWS Organization Hierarchy"
date: "2022-02-23"
tags:
- aws
- management
---

## Overview

![aws_organization_hierarchy](files/aws_organization_hierarchy.svg)

## Organizational Units (OUs)

- Group child accounts together
- Allow [SCPs](notes/AWS%20Service%20Control%20Policies%20(SCPs).md) to be applied to multiple accounts
- Best practice:
	- Group accounts by permission/policy requirements, rather than corporate structure
