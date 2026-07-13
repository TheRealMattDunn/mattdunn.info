---
title: "Terraform Cloud"
date: "2022-05-19"
tags:
- terraform
- iac
---

## Overview

- Working with [Terraform](notes/moc/Terraform.md) as a team:
	- Shared [state](notes/Terraform%20State.md)—minimum requirement
	- Shared Terraform execution environment—ideal
- Terraform Cloud: team-oriented remote Terraform workflow
- Features:
	- Remote execution
	- Workspace-based organizational model
	- VCS integration
	- CLI integration
	- Remote state management
	- Cross-workspace data sharing
	- Private module registry

## Remote Execution

- Runs on disposable VMs in HashiCorp managed infrastructure
	- Can also use agent to run Terraform on self-hosted infrastructure
- Consistency and visibility
- Allows for [Sentinel](notes/Sentinel.md) policy enforcement

## Workspaces

- Collection of infrastructure config—organize resources into meaningful groups
	- cf. directories in Terraform CLI

| Component           | Terraform CLI                        | Terraform Cloud |
| ------------------- | ------------------------------------ | --------------- |
| Config              | On disk                              | In linked VCS   |
| Variable values     | `.tfvars`, CLI args, env vars        | In workspace    |
| State               | On disk/remote backend               | In workspace    |
| Credentials/secrets | Shell environment/entered at prompts | In workspace    |

- Workspace stores: state versions, run history
	- Audit trail, recovery
- Best practice: split monolithic config into smaller workspaces
	- e.g. networking, app tier etc.

## Remote State Management

- Remote backend
- State tied to workspace
- Access state in other workspaces with `terraform_remote_state` data sources
	- Workspace-to-workspace run triggers to update workspaces when dependencies change

## Private Registry

- Works like public registry
- Share [providers](notes/Terraform%20Providers.md) and [modules](notes/Terraform%20Modules.md) across organization
- Versioning
- Searchable
- Sync public modules/providers
	- Designate which are recommended in the organization
- Can use Sentinel policies
	- e.g. Mandate use of modules from private registry

## Workflows

### UI/VCS Workflow

- Primary workflow
- Webhooks registered with VCS
	- Runs started upon commit/merge
	- Speculative plans started upon pull request—can see plan in PR output
- Workspace linked to VCS branch—changes to other branches ignored
- Manual runs available
- Default: plans require confirmation in UI before apply

### API-Driven Workflow

- Workspaces not directly associated with VCS repo
	- No webhooks
- External orchestration needed to trigger Terraform runs against the Terraform Cloud API—CI/CD pipeline
- Code uploaded to Terraform Cloud as `tar.gz` file

### CLI-Driven Workflow

- Triggered from CLI
	- `plan`
	- `apply`—only allowed for workspaces not linked to VCS (ensures single source of truth)
- Integrates with existing CI/CD pipelines
- Familiar to developers
- Uses local config with remote workspace state and variables—allows preview of changes without need for credentials
