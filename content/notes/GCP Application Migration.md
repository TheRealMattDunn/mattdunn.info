---
title: "GCP Application Migration"
date: "2022-02-28"
tags:
- gcp
- cloud architecture
---

## Migrate for Compute Engine

- Migrate VMs to [Compute Engine](notes/Compute%20Engine.md)
- Lift and shift
- Test-clones—pre-migration validation
- Replicates instance data to GCP in the background—zero interruptions
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
| 4. Test-clone | (Optional) Clone VM to GCP for testing in sandbox environment                   |
| 5. Cut-over   | Stop source, create new Compute Engine instance, roll-back manually if required |
| 6. Finalize   | Remove replication data, delete test VMs                                                                                |
