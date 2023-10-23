---
title: Apache Beam
date: 2022-09-06
tags:
  - data
  - big data
  - data processing
last-modified: 2023-10-23
---

## Overview

- Open source, unified programming model to define and execute data processing pipelines
- Unified—single model for batch and stream
	- B(atch)(Str)eam
	- Avoid [Training-Serving Skew](Training-Serving%20Skew.md)
- Portable—works in different execution environments, e.g. [Dataflow](notes/Dataflow.md), Apache Spark
- Extensible—write/share connectors and transformation libraries
- Templates
- Java, Python, Go
- SDK available
- Model representation of code—executed via runners in execution environment

### Use-cases

- Pipe data in data warehouse
- ETL
