---
title: Cloud Debugger
date: 2022-02-25
last-modified: 2023-10-23
tags:
  - google cloud
  - operations
---

## Overview

- Debug in real time without stopping/slowing applications
- Link source code from: Cloud Source Repositories, GitHub, BitBucket, GitLab, locally
- Code Search—find functions, methods, line numbers
- Code Share—collaborate on debug sessions
- IDE integration—IntelliJ, VS Code, Atom
- Free to use

## Snapshots

- Capture application state at line locations
	- Adds <10ms to requests—not noticeable
- Capture local variables and call stack
- Conditional snapshots (Java, Python and Go only)
- Canarying (Java, Python, NodeJS)—test snapshot against a subset of instances

## Log Points

- Inject logs into running apps without redeployment
- Active for 24 hrs
- Output sent to target's environment
- Conditional log points (all languages)
- Canarying (Java, Python, NodeJS)—test log point against a subset of instances
