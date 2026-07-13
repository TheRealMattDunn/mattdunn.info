---
title: "Sentinel"
date: "2022-05-19"
tags:
- sentinel
- iac
- pac
- security
- policies
---

## Overview

- Policy-as-code framework
- Guardrails that prevent [Terraform](notes/moc/Terraform.md) from performing dangerous of disallowed actions
- Integrated with HashiCorp Enterprise products
- Enforced between `plan` and `apply` phases

## Policies

- Written in Sentinel language
- Single rule/policy/guardrail

## Policy Sets

- Groups of policies that can be enforced on workspaces
- Managed at the organisation level
- Scope to workspaces, or global

## Policy Enforcement Levels

- `hard-mandatory`—requires that the policy passes
- `soft-mandatory`—as `hard-mandatory`, but ca be overridden by users with Manage Policy Overrides permission on a case-by-case basis
- `advisory`—informational only

## Configuration

- `sentinel.hcl`—contains:
	- Each policy in the set
	- Enforcement level of each poli
	- Modules required
	- e.g.

```hcl {title="sentinel.hcl"}
policy "tf_maintenance_window" {
  source            = "tf_maintenance_window.sentinel" # Local file or http/s
  enforcement_level = "hard-mandatory"
}
```

## Mocking

- Allows testing of policies—best practice
- Terraform Cloud can generate mock data from existing configurations—via the console or API
	- Terraform Cloud attempts to redact sensitive data, but not 100% guaranteed
