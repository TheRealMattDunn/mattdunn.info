---
title: "Terraform Vault Provider"
date: "2022-05-18"
tags:
- terraform
- vault
- iac
- secrets
- security
---

## Overview

- Read, write and configure [Vault](notes/moc/Vault.md)
- Best practice: avoid secrets in [Terraform](notes/moc/Terraform.md) config and [state](notes/Terraform%20State.md)

### Use Cases

#### Configure and Populate Vault with Secrets

- Initial setup and configuration of Vault
- Populate with secrets
- State and plans should be stored with care—will contain the secrets written to Vault in plaintext

#### Use Vault Credentials in Terraform Config

- Inject 3rd party [provider](notes/Terraform%20Providers.md) credentials into config
	- Vault manages credentials
- Only need suitably privileged Vault token—temporary lease of provider credentials
- Secrets returned from Vault data sources are stored in state, plan and displayed on command line in plaintext
	- Need to ensure adequate protection
	- Vault provider requests Vault token with short TTL by default (20 mins) to reduce attack window
