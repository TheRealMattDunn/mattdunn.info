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
	- Audit trail
- Dynamic secrets
	- Ephemeral
	- If leaked by app—only valid for a short period of time
	- Each credential unique to each client—can identify source of leaks, and reduce blast radius by revoking for a single client only
- Encryption as a service
	- Solve issue with apps performing encryption incorrectly—vetted implementation
	- Named keys
	- Expose API to do cryptography
	- Full key lifecycle

## Topics

- [Vault Architecture](notes/Vault%20Architecture.md)
- [Vault Secrets Engines](notes/Vault%20Secrets%20Engines.md)
	- [Key/Value Secrets Engine](notes/Vault%20Key%20Value%20Secrets%20Engine.md)
	- [AWS Secrets Engine](notes/Vault%20AWS%20Secrets%20Engine.md)
- [Vault Help](notes/Vault%20Help.md)
