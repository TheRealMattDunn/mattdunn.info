---
title: "Vault Key Value Secrets Engine"
date: "2022-05-20"
tags:
- vault
- secrets engine
---

## Overview

- Generic key-value store—arbitrary secrets
- Enabled by default at `secret/` path
- V1 and V2
	- V2 includes versioning

## Operations

### Write

```bash
vault kv put secret/<PATH> <KEY>=<VALUE>
```

### Read

```bash
vault kv get [-field=<KEY>] secret/<PATH>
```

### Delete

```bash
vault kv delete secret/<PATH>
```

#### Undelete

```bash
vault kv undelete -versions=<VERSION> secret/<PATH>
```
