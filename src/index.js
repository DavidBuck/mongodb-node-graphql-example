import { GraphQLServer } from "graphql-yoga"
import "dotenv/config"
import models from "./db/models"
import connectDb from "./db"
import resolvers from "./graphql/resolvers"
import dbSeeder from "./lib/dbSeeder"

const db = connectDb().then(async () => {
  if (process.env.SEED_DB) {
    console.log("Erasing & seeding database.")
    await Promise.all([
      models.Sensor.deleteMany({}),
      models.SensorValue.deleteMany({}),
    ])

    dbSeeder()
  }
})

const context = {
  models,
  db,
}

const Server = new GraphQLServer({
  typeDefs: `${__dirname}/graphql/schema.graphql`,
  resolvers,
  context,
})

const options = {
  port: process.env.PORT,
  endpoint: "/graphql",
  playground: "/playground",
}

Server.start(options, () => {
  console.log(`Server is running on http://localhost:${options.port}`)
})
