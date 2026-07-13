---
title: "Azure Virtual Networks (VNets)"
date: "2022-05-30"
tags:
- azure
- networking
---

## Overview

- Virtual Networks, AKA VNets
- Network Security Groups—implement firewall capabilities
- Instances with public IPs can automatically communicate with the internet—no need for e.g. internet gateways
- Routing options: user-defined, BGP, system routes

## VNet Peering

- Non-transitive
- Full mesh required for any-to-any communication

## Virtual Network Appliances (NVAs)

- Virtual appliances deployed to VNets
- e.g. Firewall NVA options, Aviatrix NVA—transit gateway solution
