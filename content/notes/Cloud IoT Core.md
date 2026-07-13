---
title: Cloud IoT Core
date: 2022-02-16
last-modified: 2023-10-23
tags:
  - google-cloud
  - iot
  - big-data
---

> [!warning]
> Cloud IoT Core has been retired

## Overview

![IoT Core flow](files/iot_core_flow.svg)

- Fully managed—connect, manage, ingest device data
- Global

### Device Manager

- Identity
- Authentication
- Configuration
- Control

### Protocol Bridge

- Incoming telemetry data to [Pub/Sub](notes/Pub%20Sub.md)
- HTTPS or MQTT
- Two-way comms
- Updates on and offline
