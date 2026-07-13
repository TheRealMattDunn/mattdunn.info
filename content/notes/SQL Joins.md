---
title: "SQL Joins"
date: "2022-04-26"
tags:
- sql
- data
---

## Example Data

```sql
select * from TableA;
 id
----
  1
  2
  3
  4
  5
  6
  7
  8
(8 rows)

select * from TableB;
 id
----
  1
  2
  3
  4
  5
  9
  10
  11
(8 rows)

```

## Inner Join

> Combines columns, keeping values common to both tables only.

![sql_inner_join](files/sql_inner_join.svg)

```sql
select * from TableA inner join TableB on TableA.id = TableB.id;
 id | id
----+----
  1 |  1
  2 |  2
  3 |  3
  4 |  4
  5 |  5
(5 rows)

```

## Left Outer Join

> Combines columns, keeping all values from the left-hand table, alongside values matched in the right-hand table.

![sql_left_outer_join](files/sql_left_outer_join.svg)

```sql
select * from TableA left outer join TableB on TableA.id = TableB.id;
 id | id
----+----
  1 |  1
  2 |  2
  3 |  3
  4 |  4
  5 |  5
  6 |
  7 |
  8 |
(8 rows)

```

## Left Outer Exclusive Join

> Combines columns, keeping values unique to the table only.

![sql_left_outer_exclusive_join](files/sql_left_outer_exclusive_join.svg)

```sql
select * from TableA left outer join TableB on TableA.id = TableB.id where TableB.id is null;
 id | id
----+----
  6 |
  7 |
  8 |
(3 rows)
```

## Full Outer Join

> Combines columns, keeping all values from both tables.

![sql_full_outer_join](files/sql_full_outer_join.svg)

```sql
select * from TableA full outer join TableB on TableA.id = TableB.id;
 id | id
----+----
  1 |  1
  2 |  2
  3 |  3
  4 |  4
  5 |  5
  6 |
  7 |
  8 |
    |  9
    | 10
    | 11
(11 rows)

```

## Full Outer Exclusive Join

> Combines columns, keeping values unique to each table only.

![sql_full_outer_exclusive_join](files/sql_full_outer_exclusive_join.svg)

```sql
select * from TableA full outer join TableB on TableA.id = TableB.id where TableA.id is null or TableB.id is null;
 id | id
----+----
  6 |
  7 |
  8 |
    |  9
    | 10
    | 11
(6 rows)
```

## Union

> Concatenates result sets, sorts and removes duplicates.

```sql
select * from TableA union select * from TableB;
 id
----
 10
  2
  5
  4
  6
  9
  1
 11
  3
  8
  7
(11 rows)
```

## Union All

> Concatenates result sets. Not sorted, and duplicates kept.

```sql
select * from TableA union all select * from TableB;
 id
----
  1
  2
  3
  4
  5
  6
  7
  8
  1
  2
  3
  4
  5
  9
 10
 11
(16 rows)
```
