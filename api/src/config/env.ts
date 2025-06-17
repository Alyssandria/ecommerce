import dotenv from "dotenv"

dotenv.config();

interface ENV {
  PORT: number,
  DB_URL: string
}

export const env: ENV = {
  PORT: Number(process.env.PORT)!,
  DB_URL: process.env.DB_URL!
}
