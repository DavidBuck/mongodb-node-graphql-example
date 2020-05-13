import mongoose from "mongoose"

const sensorValueSchema = new mongoose.Schema({
  temp: Number,
  humidity: Number,
  time: Date,
  sensorId: { type: mongoose.Schema.Types.ObjectId, ref: "Sensor" },
})

const SensorValue = mongoose.model("SensorValue", sensorValueSchema)

export default SensorValue
