---
title: "Vault"
date: "2022-05-20"
tags:
- vault
- moc
---

## Intro

- Secrets—things that grant authentication or authorization
	- Usernames, passwords, TLC certs, API tokens etc.
- Secret sprawl—secrets end up everywhere
	- Source code, config, VCS etc.

### Vault

- Solves secret sprawl—centralization of secrets
	- Encrypt at rest/transit
	- Fine-grained access control—ACLs
	- Audi trail
- Dynamic secrets
	- Ephemeral
	- If leaked by app—only valid for a short period of time
	- Each credential unique to each client—can identify source of leaks, and reduce blast radius by revoking for a single client only
- Encryption as a service
	- Solve issue with apps performing encryption incorrectly—vetted implementation
	- Named keys
	- Expose API to do cryptography
	- Full key lifecycle

## Architecture

### Vault Instance

- Plugin architecture:

![vault_instance_architecture](files/vault_instance_architecture.svg)

### HA

![vault_ha](files/vault_ha.svg)

## Secrets Engines

- Plugin model—store, generate, encrypt secrets
	- Some store secrets; some call to 3rd party APIs—dynamic secrets
- Path prefix—associated with secrets engine
	- Requests routed to secrets engine based on path
	- Each path isolated—secrets engines can't communicate with secrets engines at different paths

### Enable/Disable

```
vault secrets enable [-path=<PATH>] <SECRETS_ENGINE>

vault secrets disable <PATH>/
```

- `-path=<PATH>` optional—defaults to name of secrets engine

### List

- [Key/Value](notes/Vault%20Key%20Value%20Secrets%20Engine.md)
