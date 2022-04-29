---
title: "Event Driven Architecture"
date: "2022-04-29"
tags:
- architecture
- development
- applications
---

## Considerations

- Input
	- Idempotent functions—same output if triggered multiple times
		- Need mechanism to identify duplicate events—key, e.g, for processing payments
	- Event size—sparse vs dense
		- Choose to minimize number of subsequent calls to retrieve more data
		- Balance against message size
			- Large messages increase payload size, and introduce complexity in management of the API contract
- Output
	- Consider knock-on effects
	- Make every function emit an event, even if there are (currently) no consumers—extensibility

## Designing Event Driven Applications

- Create two tables: one for each service; one for each event.
- Simpler to understand, maintain and extend than a diagram

### Design Table

| API (sync)  | Input Events | Service   | Action      | Output Event |
| ----------- | ------------ | --------- | ----------- | ------------ |
| CreateOrder |              | Order     | CreateOrder | OrderCreated |
|             | CreateOrder  | Inventory | ReserveItem | ItemReserved |
| ...         |              |           |             |              |

'API (Sync)' column represents the only synchronous call in the application, i.e. the intial API call which triggers the flow.

### Event Table

| Name         | Attributes                         | Service   | Action      |
| ------------ | ---------------------------------- | --------- | ----------- |
| OrderCreated | CustomerId<br>ProductId<br>OrderId | Order     | CreateOrder |
| ItemReserved | CustomerId<br>ProductId<br>OrderId | Inventory | ReserveItem |
| ...          |                                    |           |             |

### Errors

- Design errors via same method as the happy path designs—emit error events etc.
- Revert any side effects

## Best Practices

- Keep track of all events in an event log—helps with debugging
	- e.g. in AWS, create a custom bus in Event Bridge, trigger a Lambda function for every event, and store in DynamoDB
- Use Dead Letter Queues in the event bus

# References

- [Building Event-Driven Applications in AWS](https://blog.marcia.dev/event-driven-applications)
