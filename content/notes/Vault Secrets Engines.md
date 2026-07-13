---
title: "Vault Secrets Engines"
date: "2022-09-05"
tags:
- vault
---

## Overview

- Plugin model—store, generate, encrypt secrets
	- Some store secrets; some call to 3rd party APIs—dynamic secrets
- Path prefix—associated with secrets engine
	- Requests routed to secrets engine based on path
	- Each path isolated—secrets engines can't communicate with secrets engines at different paths

## Enable/Disable

```bash
vault secrets enable [-path=<PATH>] <SECRETS_ENGINE>

vault secrets disable <PATH>/
```

- `-path=<PATH>` optional—defaults to name of secrets engine

## Dynamic Secrets Engines

- Generated when accessed
- Built-in revocation—can be revoked immediately after use

## List

- [Key/Value](notes/Vault%20Key%20Value%20Secrets%20Engine.md)
- [Vault AWS Secrets Engine](notes/Vault%20AWS%20Secrets%20Engine.md)
