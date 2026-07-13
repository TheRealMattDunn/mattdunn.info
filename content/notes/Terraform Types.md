---
title: "Terraform Types"
date: "2022-05-19"
tags:
- terraform
- iac
---

## Primitive Types

- `string`
- `number`—represents integers and floating point
- `bool`

## Collections

- `list(<TYPE>)`
	- Ordered
	- Elements identified by index starting with 0
- `map(<TYPE>)`
	- Key/value pairs—separate with `:` or `=`
	- Delimit with newlines or commas
- `set(<TYPE>)`
	- Collection of unique values
	- unordered

## Structural Types

- Grouping of several distinct types
- Requires schema definition
- `object(<TYPE>)`
	- Collection of named attributes with their own types
	- e.g. `object({foo=string, hello=number})`
	- Can assign values with additional attributes, but these are lost, i.e. object slicing occurs
- `tuple(<TYPE>)`
	- Sequence of elements with different types
	- Ordered/indexed
	- e.g. `tuple([string, number])`
