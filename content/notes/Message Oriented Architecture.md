---
title: Message Oriented Architecture
date: 2022-09-06
last-modified: 2023-10-23
tags:
  - architecture
---

## Overview

- Data streamed from many producers, e.g. IoT devices asynchronously
- Challenges:
	- Data streamed from many methods/devices
	- Hard to distribute event messages to right subscribers
	- Data can arrive quickly/at high volumes
	- Ensure services are reliable, secure, perform as expected
- Google solution: [Pub/Sub](notes/Pub%20Sub.md)
	- Ensures at-least-once delivery
	- SaaS
	- Open APIs
	- Global by default
	- E2E encryption

## Pub/Sub Flows

![Pub/Sub Flow](files/pub_sub_flow.svg)
