---
title: "GCP IoT Core"
date: "2022-02-16"
tags:
- gcp
- iot
- big data
---

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

- Incoming telemetry data to [Pub/Sub](notes/GCP%20Pub%20Sub.md)
- HTTPS or MQTT
- Two-way comms
- Updates on and offline
