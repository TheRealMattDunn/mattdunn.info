---
title: "Terraform Commands"
date: "2022-05-13"
tags:
- terraform
- iac
---

## Commands

-`apply`—executes the actions proposed in a Terraform plan
- `destroy`—destroys all remote objects managed by the config
- `fmt`—rewrites config files to canonical Terraform format/style
	- Also flags syntax errors
- `import`—imports existing remote objects into the [Terraform state](notes/Terraform%20State.md)
- `init`—initializes a working directory containing Terraform config files.
- `plan`—creates an execution plan
	- Preview changes that Terraform plans to make
- `state`—advanced state management. Sub-commands:
	- `list`
	- `mv`—bind a remote object to a different Terraform address
	- `pull`—manually download and output remote state
	- `push`—manually upload local state to remote
	- `replace-provider`—change provider of resource
	- `rm`—remove and object from the state without destroying
	- `show`—display the attributes of a single resource in the state
- `taint`—marks resources as tainted, i.e. damaged
	- Terraform recreates on next apply
	- Deprecated—use `terraform apply -replace <resource>` instead
- `validate`—validates config files in the directory
	- Doesn't access any remote services e.g. remote state, APIs, etc.
	- Verifies configuration is syntatically valid and internally consistent
	- Safe to run automatically, e.g. post-save step
- `workspace`—[backend](notes/Terraform%20Backends.md) state is stored in a workspace
	- Allows multiple states to be associated with a single configuration
	- "default" workspace
	- Refer to the workspace name in config with `${terraform.workspace}`
	- Use cases:
		- Create temporary test infrastructure aside from production
		- Not suitable for strong separation of environments—instead use modules with a different backend for each
