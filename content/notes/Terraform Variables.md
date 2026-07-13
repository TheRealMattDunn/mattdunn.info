---
title: "Terraform Variables"
date: "2022-05-16"
tags:
- terraform
- iac
---

## Overview

- Declared in `variable` blocks
- Arguments:
	- `default`
		- Causes variable to be optional.
		- If omitted, value is set to the `default` argument
	- `type`
		- `string`
		- `number`
		- `bool`
		- Complex types: `list(<TYPE>)`, `set(<TYPE>)`, `map(<TYPE>)`, `object({<ATTR_NAME> = <TYPE>, ...}`, `tuple([<TYPE>, ...])`
		- `any`
	- `description`
		- Variable documentation
	- `validation`
		- See below
	- `sensitive`
		- Suppresses display of value in the CLI output
		- Value still stored in plain text in [state](notes/Terraform%20State.md)
		- Sent to provider without obfuscation
			- Could be disclosed e.g. as part of an ID
	- `nullable`
		- Allows/disallows `null` values

## Validation

- In addition to type constraints.
- `validation.condition` must use value of variable to return `true` if valid, otherwise `false`
- Must not produce errors
	- May use `can` function to detect errors and return `true`/`false`
- e.g.
```hcl
variable "my_id" {
  type = string
  
  validation {
    condition     = length(var.my_id) > 4 && substr(var.my_id, 0, 3) == "foo"
    error_message = "The length of my_id must be greater than 4, starting with foo"
  }
}
```

## Setting Variables

- Precedence:
	- Environment variables—in format `TF_VAR_<variable name>`
	- `terraform.tfvars`
	- `terraform.tfvars.json`
	- `*.auto.tfvars` / `*.auto.tfvars.json`
	- `-var` / `-var-file` on the command line
