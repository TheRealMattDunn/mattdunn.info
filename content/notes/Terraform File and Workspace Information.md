---
title: "Terraform File and Workspace Information"
date: "2022-05-19"
tags:
- terraform
- iac
---

## Constants

- `path.module`—filesystem path of the containing module
- `path.root`—filesystem path of the root module
- `path.cwd`—path of the current working directory. Generally equal to `path.root`, unless Terraform is run from a different directory
- `terraform.workspace`—name of the current workspace
- Recommendation: use only `path.module` within modules, the others only in the rool module
	- Aids portability of modules
