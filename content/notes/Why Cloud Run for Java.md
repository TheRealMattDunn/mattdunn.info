---
title: Why Cloud Run for Java
date: 2022-10-17
last-modified: 2023-10-23
tags:
  - google cloud
  - cloud run
  - java
  - development
---

## Deploy in Seconds

- Deploy Spring Boot app without additional config
- Optionally supply [`cloudbuild.yaml`](notes/Cloud%20Build.md)
	- Custom steps e.g. run tests
	- Specify builder machine family
	- Tag images

## Canary Releases

- Split traffic between app versions
- Percentage-base traffic management

## Native Image Compilation

- Especially relevant for serverless apps
- Cold starts—common solution is to keep minimum instances running
	- Native Image Compilation—Java alternative
	- Reduces app startup time
	- Compile to machine code at compile time rather than bytecode—cut out JVM
	- Remove unnecessary code from class path

## Binary Authorization

- Signed builds
- Enforce in Cloud Run e.g. vulnerability scans on all images
