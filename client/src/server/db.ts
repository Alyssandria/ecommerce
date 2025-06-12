import { config } from "@/config/env"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

const pool = new Pool({
  connectionString: config.DB_URL
})

export const DB = drizzle({ client: pool })
