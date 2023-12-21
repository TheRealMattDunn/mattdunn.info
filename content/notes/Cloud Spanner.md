---
title: Cloud Spanner
date: 2022-02-20
last-modified: 2023-10-23
tags:
  - google-cloud
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

### Parent-Child Relationships

#### Foreign Keys

- Tradition SQL foreign keys relationship
- Foreign key can be created on any columns
- Table can have multiple foreign key relationships—as both parent and child
- Does not imply co-location of tables in storage layer

#### Table Interleaving

- Child table's primary key includes parent table's primary key columns
- Data locality relationship between tables—parent and child rows physically stored together
- Improves performance
- Use-case: scenarios where the child table is frequently fetched with the parent

## References

- [Google Cloud Decision Trees](notes/moc/Google%20Cloud%20Decision%20Trees.md)
- [Google Cloud Database Connections](notes/Google%20Cloud%20Database%20Connections.md)
