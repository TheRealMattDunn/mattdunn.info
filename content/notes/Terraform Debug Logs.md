---
title: "Terraform Debug Logs"
date: "2022-05-13"
tags:
- terraform
- iac
---

## Enable Debug Logging

- Set env var `TF_LOG` to `TRACE`, `DEBUG`, `INFO`, `WARN` or `ERROR`
- Also `TF_LOG_CORE` (core Terraform debug logs), `TF_LOG_PROVIDER` (provider logs)
- `TF_LOG_PATH`—append logs to a file
