import dotenv from "dotenv"

dotenv.config();

interface ENV {
  PORT: number,
  DB_URL: string,
  JWT_SECRET: string

}

export const env: ENV = {
  PORT: Number(process.env.PORT)!,
  DB_URL: process.env.DB_URL!,
  JWT_SECRET: process.env.JWT_SECRET!
}
