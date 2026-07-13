---
title: "Terraform Commands"
date: "2022-05-13"
tags:
- terraform
- iac
---

## Commands

- `apply`—executes the actions proposed in a Terraform plan
	- Default parallelism of 10 concurrent operations
- `destroy`—destroys all remote objects managed by the config
	- Convenience alias to `terraform apply -destroy`
- `fmt`—rewrites config files to canonical Terraform format/style
	- Also flags syntax errors
- `force-unlock`—manually unlock the [state](notes/Terraform%20State.md) where automatic unlocking fails
- `graph`—produces a representation of the dependency graph is the DOT language
	- Use e.g. GraphViz to read
- `import`—imports existing remote objects into the state
- `init`—initializes a working directory containing Terraform config files
- `login`—authenticates with Terraform cloud
	- The only way to authenticate with Terraform cloud
	- Triggers a browser window, from which a login token can be obtained
- `plan`—creates an execution plan
	- Preview changes that Terraform plans to make
- `provider`—prints tree of modules annotated with provider requirements
	- `provider mirror`—saves local copies of all required provider plugins
	- `provider schema`—shows detailed provider schemas
- `refresh`—reads current settings from all managed remote objects and updates state to match
	- *Deprecated*—use `apply -refresh-only` instead
- `show`—Outputs state or plan file in human-readable format
	- By default, shows the current state
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
	- *Deprecated*—use `apply -replace <resource>` instead
- `validate`—validates config files in the directory
	- Doesn't access any remote services e.g. remote state, APIs, etc.
	- Verifies configuration is syntatically valid and internally consistent
	- Safe to run automatically, e.g. post-save step
- `workspace`—[backend](notes/Terraform%20Backends.md) state is stored in a workspace
	- Create a new workspace with `workspace new <workspace name>`
	- Switch workspace with `workspace select <workspace name>`
	- Allows multiple states to be associated with a single configuration
	- "default" workspace—can't be deleted
	- Refer to the workspace name in config with `${terraform.workspace}`
	- Use cases:
		- Create temporary test infrastructure aside from production
		- Not suitable for strong separation of environments—instead use modules with a different backend for each
