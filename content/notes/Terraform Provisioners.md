---
title: Terraform Provisioners
date: 2022-05-13
last-modified: 2023-10-23
tags:
  - terraform
  - iac
---

## Overview

- Provisioners model actions on the local or remote machines
- Prepare infrastructure for service
- Should be used as a last resort
	- For actions not directly represented in Terraform
- Create-time or destroy-time—cannot be used to perform actions on existing resources
	- Resource must be destroyed and recreated

## Anti-Patterns

### Pass Data into VMs

- Instead: utilize e.g. `user_data` for AWS EC2, or `metadata` for Google Cloud [Compute Engine](notes/Compute%20Engine.md)

### Running Configuration Management Software

- e.g. Ansible
- Instead: build custom images outside of Terraform, e.g. with HashiCorp Packer

### Where First-Class Provider Support is Available

- Also, make provisioner use as temporary workaround—support may eventually be available
	- Raise ticket with provider to support functionality

## Usage

- Built-in provisioners: `file`, `local-exec`, `remote-exec`
- Placed inside resource blocks, e.g. for compute instances:
```hcl
resource "aws_instance" "instance" {
  #...

  provisioner "local-exec" {
    command = "echo hello ${self.private_ip}"
  }
}
```
- Can have multiple per resource
- Use `self` to reference parent attributes
- Defaults:
	- Run on creation-time, not during updates
	- Failure marks resource as tainted
		- Change with `on_failure`—`continue` or `fail`
- Destroy-time: `when = destroy`
	- Can't run if provisioner removed from config—destroy resource by setting `count = 0` first
