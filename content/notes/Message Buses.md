---
title: "Message Buses"
date: "2022-04-19"
tags:
- archtecture
- development
---

## Use Cases

- Distributing workloads—distribute tasks between workers
- Asynchronous workflows—e.g. order fulfilment
- Distributing event notifications—alert other services that something has happened, e.g. order placed
- Distributed logging—distribute to log archives, analytics etc.
- Data device streaming—IoT, consumed on demand
- Increases resilience of applications—loose coupling between services

## Pub/Sub Patterns

### One-to-One

![pub_sub_one_to_one](files/pub_sub_one_to_one.svg)

### One-to-Many

#### Each Subscriber Receives a Copy of Every Message

![pub_sub_one_to_many](files/pub_sub_one_to_many.svg)

#### Round Robin Message Delivery

![pub_sub_one_to_many_round_robin](files/pub_sub_one_to_many_round_robin.svg)

### Many-to-Many

![pub_sub_many_to_many](files/pub_sub_many_to_many.svg)

### Many-to-One

![pub_sub_many_to_one](files/pub_sub_many_to_one.svg)

## Subscription Types

- Pull—subscriber makes request via subscription to check for new messages
- Push—auto send messages to HTTP endpoint
