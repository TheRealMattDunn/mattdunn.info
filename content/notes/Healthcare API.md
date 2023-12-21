---
title: Healthcare API
date: 2022-09-06
last-modified: 2023-10-23
tags:
  - google cloud
  - healthcare
---

## Overview

- Manages solution for storing/accessing healthcare data
- Bridge between existing healthcare systems and apps hosted on Google Cloud
- Interfaces:
	- FHIR
	- HL7v2
	- DICOM
- Backed by standards complient data store
- Interface to [Pub/Sub](notes/Pub%20Sub.md)
	- Transform in [Dataflow](notes/Dataflow.md)
	- Trigger [Cloud Functions](notes/Cloud%20Functions.md)
	- Stream to [BigQuery](notes/BigQuery.md)
	- Send to [Vertex AI](notes/moc/Vertex%20AI.md)

## Key Features

- Standards conformance
- Compiance with privacy regulartions
- Data location control
- Security via IAM
- Open source proxies available for Apigee
	- Thread detection
	- Traffic management
- Bulk import/export via [Cloud Storage](notes/Cloud%20Storage.md)
- De-identification
- Auditing via [Cloud Logging](notes/Cloud%20Logging.md)
- High availability

## Implementation Details

- Datasets—regional
- Store—modality specific i.e. HL7v2, DICOM, FHIR

![Healthcare API Datastores](files/healthcare_api_datastores.svg)
