import dotenv from "dotenv"

dotenv.config();

interface ENV {
  PORT: number
}

export const env: ENV = {
  PORT: Number(process.env.PORT)!
}
