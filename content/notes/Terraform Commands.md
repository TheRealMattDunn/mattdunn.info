---
title: "Terraform Commands"
date: "2022-05-13"
tags:
- terraform
- iac
---

## Commands

- `fmt`—rewrites config files to canonical Terraform format/style
	- Also flags syntax errors
- `import`—imports existing remote objects into the Terraform state
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
- `workspace`—backend state is stored in a workspace
	- Allows multiple states to be associated with a single configuration
	- "default" workspace
	- Refer to the workspace name in config with `${terraform.workspace}`
	- Use cases:
		- Create temporary test infrastructure aside from production
		- Not suitable for strong separation of environments—instead use modules with a different backend for each
