---
title: "Vault AWS Secrets Engine"
date: "2022-09-05"
tags:
- vault
- aws
---

## Overview

- Generates dynamic secrets granting access to AWS resources
- AWS role configured in Vault—when valling Secrets Engine, a new IAM user is created, with role bound to that user
- Caller is given key pair to access AWS as that user
- Can revoke key via Vault

## Usage

- Enable:

```bash
vault secrets enable -path=aws aws
```

- Configure:

```bash
vault write aws/config/root access_key=<AWS_ACCESS_KEY_ID> secret_key=<AWS_SECRET_ACCESS_KEY> region=<REGION>
```

- Create role:
	- Secrets engine creates IAM user
	- Role is attached to user—defines permissions user has

```bash
vault write aws/roles/<ROLE_NAME> credential_type=iam_user policy_document=-<<EOF
# ...
EOF
```

- Generate secret
	- Each run causes Vault to connect to AWS and generate a new IAM user (with role defined above) and key pair

```bash
vault read aws/creds/<ROLE_NAME>
```

- Revoke secret

```bash
vault lease revoke aws/creds/<ROLE_NAME>/<LEASE_ID>
```
