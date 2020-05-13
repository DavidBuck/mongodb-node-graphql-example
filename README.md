# GraphQL server example

This is a simple GraphQL server example using [graphql-yoga](https://github.com/prisma-labs/graphql-yoga), [Mongoose](https://www.npmjs.com/package/mongoose) and MongoDB.

To start the server:

- start MongoDB on your local machine
- `npm run start`

Go to [http://localhost:3000/playground](http://localhost:3000/playground) to launch the GraphQL Playground.

# Queries

**All sensors:**

```graphql
{
  sensors {
    sensorName
    type
    location
    _id
  }
}
```

**All sensorValues:**

```graphql
{
  sensorValues {
    temp
    humidity
    time
    _id
    sensor {
      sensorName
      type
      location
      _id
    }
  }
}
```

**A sensor:**

```graphql
{
  sensor(_id: "5eba09502ba39cfe8fd331cd") {
    sensorName
    type
    location
    _id
  }
}
```

**A sensorValue:**

```graphql
{
  sensorValue(_id: "5ebb20231b0fc015e75c0e0f") {
    temp
    humidity
    time
    _id
    sensor {
      sensorName
      type
      location
      _id
    }
  }
}
```

## Mutations

**Create a sensor:**

```graphql
mutation {
  createSensor(
    sensorName: "Freezer Sensor 1"
    type: "Arduino Uno"
    location: "Main freezer"
  ) {
    sensorName
    type
    location
    _id
  }
}
```

**Create a sensorValue:**

```graphql
mutation {
  createSensorValue(
    temp: 25.4
    humidity: 82.2
    time: "2020-05-12T03:29:10.040Z"
    sensorId: "5eba1b5315de6001af4c8614"
  ) {
    temp
    humidity
    time
    _id
    sensor {
      sensorName
      type
      location
      _id
    }
  }
}
```

**Update a sensor:**

```graphql
mutation {
  updateSensor(
    _id: "5eba1ff3f550ab0288d69922"
    sensorName: "New Freezer Sensor"
    type: "Raspberry Pi"
    location: "Main freezer"
  ) {
    sensorName
    type
    location
    _id
  }
}
```

**Update a sensorValue:**

```graphql
mutation {
  updateSensorValue(
    _id: "5eba1ff3f550ab0288d69929"
    temp: 2.4
    humidity: 82.2
    time: "2020-05-12T03:29:10.040Z"
    sensorId: "5eba1ff3f550ab0288d69923"
  ) {
    temp
    humidity
    time
    _id
    sensor {
      sensorName
      type
      location
      _id
    }
  }
}
```

**Delete a sensor:**

```graphql
mutation {
  deleteSensor(_id: "5eba1b5315de6001af4c8614")
}
```

**Delete a sensorValue:**

```graphql
mutation {
  deleteSensorValue(_id: "5eba1bb198fbcd01cdb25acb")
}
```

## Tools

- [graphql-yoga](https://github.com/prisma-labs/graphql-yoga)
- [Mongoose](https://www.npmjs.com/package/mongoose)
