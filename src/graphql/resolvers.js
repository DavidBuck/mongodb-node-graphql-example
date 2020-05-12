export default {
  Query: {
    sensors: async (parent, args, { models }) => {
      const sensors = await models.Sensor.find({})
      return sensors
    },
    sensorValues: async (parent, args, { models }) => {
      const sensorValues = await models.SensorValue.find({})
      return sensorValues
    },
    sensor: async (parent, { _id }, { models }) => {
      const sensor = await models.Sensor.findById(_id)
      return sensor
    },
    sensorValue: async (parent, { _id }, { models }) => {
      const sensorValue = await models.SensorValue.findById(_id)
      return sensorValue
    },
  },
  Mutation: {
    createSensor: async (
      parent,
      { sensorName, type, location },
      { models }
    ) => {
      const sensor = await models.Sensor.create({
        sensorName,
        type,
        location,
      })
      return sensor
    },
    createSensorValue: async (
      parent,
      { temp, humidity, time, sensor },
      { models }
    ) => {
      const sensorValue = await models.SensorValue.create({
        temp,
        humidity,
        time,
        sensor,
      })
      return sensorValue
    },
    updateSensor: async (
      parent,
      { _id, sensorName, type, location },
      { models }
    ) => {
      const sensor = await models.Sensor.findByIdAndUpdate(
        _id,
        {
          sensorName,
          type,
          location,
        },
        { new: true }
      )
      return sensor
    },
    updateSensorValue: async (
      parent,
      { _id, temp, humidity, time, sensor },
      { models }
    ) => {
      const sensorValue = await models.SensorValue.findByIdAndUpdate(
        _id,
        {
          temp,
          humidity,
          time,
          sensor,
        },
        { new: true }
      )
      return sensorValue
    },
    deleteSensor: async (parent, { _id }, { models }) => {
      const Sensor = await models.Sensor.findById(_id)

      if (Sensor) {
        try {
          await Sensor.remove()
        } catch (e) {
          throw new Error("Error deleting Sensor")
        }
      }
      return true
    },
    deleteSensorValue: async (parent, { _id }, { models }) => {
      const SensorValue = await models.SensorValue.findById(_id)

      if (SensorValue) {
        try {
          await SensorValue.remove()
        } catch (e) {
          throw new Error("Error deleting SensorValue")
        }
      }
      return true
    },
  },
}
