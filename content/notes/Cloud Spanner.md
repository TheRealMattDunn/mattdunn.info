---
title: "Cloud Spanner"
date: "2022-02-20"
tags:
- gcp
- data
- database
---

## Overview

- Relational—SQL
- Horizontal scalability, high availability and strong consistency
	- Unlimited scale and capacity
	- 99.999% availability (5 nines)—global replication
	- External consistency
- For each instance, define:
	- Configuration
	- Compute capacity
- Auto sharding
- Backup/restore, point-in-time recovery (PITR)
- Use query parameters to increase efficiency and reduce cost
- Use cases: financial sector

## Implementation Details

### Primary Keys

- Avoid hotspots: don't use monotonically increasing integers as keys
	- Results in many writes to the same server
- Options:
	- Hash
	- Swap column orders
	- UUID Version 4
		- UUID Version 1 not suitable
	- Bit-reverse sequential values

# References

- [GCP Decision Trees](notes/GCP%20Decision%20Trees.md)
