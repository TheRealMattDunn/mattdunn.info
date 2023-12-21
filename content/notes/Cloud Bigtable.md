---
title: Cloud Bigtable
date: 2022-02-20
last-modified: 2023-10-23
tags:
  - google cloud
  - data
  - database
---

## Overview

- Wide-column NoSQL database
- Single key, multiple column rows
- Large analytical/operational workloads
- Key-value store
- High read/write rates, low latency—<10 ms read/write operations
- Tables stored in instances
	- Zonal resource
	- Regional replication—up to four nodes in different zones, primary-primary replication
- Use cases:
	- Time-series data
	- Marketing/financial data
	- IoT data

## General Technical Details

- Key/value storage—not relational, no joins
- Transactions supported within single row only
	- Operations atomic at row level
- Rows sorted by row key in lexicographical big-endian (network) byte order
- Column families not sorted
- Columns sorted within column family

## Storage Model

- Tables—key/value map
- Each row contains a single entity—columns store values for each row
- Single row key—acts as primary key
- Related columns grouped into column families
	- Columns identified by combination of column family and column qualifier—unique name within column family
- Each row/column intersection contains multiple cells—timestamped version of data (how the data has changed over time)
- Sparse—columns can be null
	- No storage used for empty cells

![Bigtable Storage Model](files/bigtable_storage_model.svg)

## Best Practices

### Tables

- Store similar datasets in the same table—use a unique row prefix for each dataset
- Anti-pattern: many small tables—poor performance

### Column Families

- Group related columns in the same column family
	- Simplifies filters
	- Reduces redundant data transfers
- Max ~100 column families—more causes poor performance
- Use short names—reduces data transferred in requests/responses
- Garbage collection performed at column family level
	- Store data with different data retention needs in different column families
	- Reduces storage costs

### Columns

- Treat column qualifiers as data—save space by naming with value
- Create many columns—can scale to millions
	- No space penalty for rows with null values
- Use sparse rows—not every column should have a value for every row
	- Max 100MB per row

### Rows

- 100MB max
- All information for a single entity should be stored in a single row
	- Atomicity only guaranteed at the row level
- Store related entities in adjacent rows—faster reads

### Cells

- 10MB max

### Row Keys

- Design based on queries used to retrieve data
	- Only 1 index, so queries on other fields inefficient—table scan required
- Most efficient reads via:
	- Row key
	- Row key prefix
	- Range of row keys—start, end
	- Other queries—triggers full table scan
- Use field promotion to move known fields into row key
	- Store multiple delimited values, e.g. separate with # symbol
	- Allows built-in sorting to store related data in contiguous rows—better performance
	- e.g. bus locations, naive design:

|            | Location |           | Details |       |
| ---------- | -------- | --------- | ------- | ----- |
| Vehicle ID | Latitude | Longitude | Company | Route |
| 173        | 53.41740 | -1.34906  | STC     | 22    |
| 174        | 53.44969 | -1.33292  | LN      | 41    |
| 175        | 53.38561 | -1.32101  | STC     | 22    |

- Unlikely to query individual buses—most likely to know company and route, e.g. to query the location of all STC buses on route 22.
- Better design:

|            | Location |           |
| ---------- | -------- | --------- |
| Vehicle ID | Latitude | Longitude |
| STC#22#173 | 53.41740 | -1.34906  |

- Use ROWPREFIXFILTER to scan—efficient as keys sorted:
	```
	scan 'vehicles', {ROWPREFIXFILTER => 'STC#22#'}
    ```

- Pad integers with 0s—data sorted lexicographically—ensures correct ordering
	- Important for timestamps—often used with range-based queries
- Use human-readable row keys—for analysis with the Key Visualizer tool
- Start row keys with a common value—use more granular values as the suffix, e.g.
	```
	asia#india#bangalore
	asia#india#mumbai
	asia#japan#tokyo
	europe#france#paris
	```
- Ideally use shorthand references where possible, e.g. EU rather than Europe, to save space
- Avoid:
	- Row keys starting with timestamps—creates hotspots (unbalanced read/writes across nodes)
	- Row keys which don't group related data together
	- Sequential numeric IDs
		- e.g. User IDs—new users more likely to be active—creates hotspots
		- Better to reverse ID—spreads writes across nodes
	- Frequently updated IDs
		- e.g. `device_id#metric`
		- Overloads nodes
		- Better to add new row per timestamp
	- Hashed row keys or raw bytes—can't use natural sorting order

## Special Use Cases

### Time-Based Data

- Include timestamp as part of row key
	- But not at beginning—creates hotspots
	- Reverse

### Multi-Tenancy

- Most efficient to use one table for all tenants
- Use tenant ID as row key prefix
	- Contiguous—better performance

### Privacy

- Don't use PII in row keys or column family IDs
	- Used as both data and metadata—could be exposed in e.g. logs

### Domain Names

- Reverse
	- Better compression
	- Related domains grouped together—more efficient reads

### Uncertain Queries

- Consider placing all data in a single column—profocol buffer (protobuf) or JSON format
	- Less space required
	- App doesn't need to know schema
	- Still requires carefully designed row key

## References

- [Google Cloud Decision Trees](notes/moc/Google%20Cloud%20Decision%20Trees.md)
- [Google Cloud Database Connections](notes/Google%20Cloud%20Database%20Connections.md)
