---
title: "DaemonSet"
date: "2022-02-18"
tags:
- kubernetes
---

## Overview

- Used for background tasks—no user intervention
- Creates one [Pod](Pod.md) per node
	- Automatically creates a new [Pod](Pod.md) for each node that is added to the cluster
