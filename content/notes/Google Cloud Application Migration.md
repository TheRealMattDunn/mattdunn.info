---
title: Google Cloud Application Migration
date: 2022-02-28
last-modified: 2023-10-23
tags:
  - google-cloud
  - cloud-architecture
  - application-modernization
---

## Approaches

### Lift and Shift

- Quick—change of hosting environment
- Minimal advantage—not utilizing cloud benefits

### Improve and Move

- Modernize during migration—take advantage of cloud capabilities
- Requires new skills and code changes

### Rip and Replace

- Remove technical debt—take full advantage of cloud features
- Requires most time/skill investment
	- Doesn't work for COTS (unless already [cloud native](notes/The%20Path%20to%20Cloud%20Native.md))

### Strangler Pattern

- Lift and shift monolith, then break apart into [microservices](notes/Microservices.md) over time

## Migrate for Compute Engine

- Migrate VMs to [Compute Engine](notes/Compute%20Engine.md)
- Lift and shift
- Test-clones—pre-migration validation
- Replicates instance data to Google Cloud in the background—zero interruptions
- Source environments:
	- VMware vSphere
	- AWS EC2
	- Azure VMs
	- Physical servers with supported OSes (e.g. CentOS, Ubuntu, Debian, Windows Server)

## Phases

| Phase         | Description                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| 1. Onboard    | Choose source VM                                                                |
| 2. Replicate  | Snapshot taken and replicated, incremental snapshot every two hours             |
| 3. Configure  | Set details for landing zone                                                    |
| 4. Test-clone | (Optional) Clone VM to Google Cloud for testing in sandbox environment          | 
| 5. Cut-over   | Stop source, create new Compute Engine instance, roll-back manually if required |
| 6. Finalize   | Remove replication data, delete test VMs                                        |
