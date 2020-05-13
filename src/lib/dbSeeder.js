import models from "../db/models"

const dbSeeder = async () => {
  const sensor1 = new models.Sensor({
    sensorName: "Weather Sensor 1",
    type: "ESP8266",
    location: "Block-1",
  })

  const sensor2 = new models.Sensor({
    sensorName: "Weather Sensor 2",
    type: "Adafruit Feather LoRa",
    location: "Block-2",
  })

  const sensor1Val1 = new models.SensorValue({
    temp: 22.3,
    humidity: 79.9,
    time: Date.now() + 60 * 1000,
    sensorId: sensor1.id,
  })
  const sensor1Val2 = new models.SensorValue({
    temp: 24.5,
    humidity: 78.9,
    time: Date.now() + 120 * 1000,
    sensorId: sensor1.id,
  })
  const sensor1Val3 = new models.SensorValue({
    temp: 21.2,
    humidity: 81.2,
    time: Date.now() + 180 * 1000,
    sensorId: sensor1.id,
  })

  const sensor2Val1 = new models.SensorValue({
    temp: 32.3,
    humidity: 90.3,
    time: Date.now() + 60 * 1000,
    sensorId: sensor2.id,
  })

  const sensor2Val2 = new models.SensorValue({
    temp: 31.4,
    humidity: 89.9,
    time: Date.now() + 120 * 1000,
    sensorId: sensor2.id,
  })

  const sensor2Val3 = new models.SensorValue({
    temp: 33.6,
    humidity: 90.6,
    time: Date.now() + 180 * 1000,
    sensorId: sensor2.id,
  })

  await sensor1.save()
  await sensor2.save()

  await sensor1Val1.save()
  await sensor1Val2.save()
  await sensor1Val3.save()

  await sensor2Val1.save()
  await sensor2Val2.save()
  await sensor2Val3.save()
}

export default dbSeeder
