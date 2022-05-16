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
	- `type`
		- `string`
		- `number`
		- `bool`
		- Complex types: `list`, `set`, `map`, `object`, `tuple`
		- `any`
	- `description`
	- `validation`
	- `sensitive`
	- `nullable`

## Setting Variables

- Presedence:
	- Environment variables
	- `terraform.tfvars`
	- `terraform.tfvars.json`
	- `*.auto.tfvars` / `*.auto.tfvars.json`
	- `-var` / `-var-file` on the command line
