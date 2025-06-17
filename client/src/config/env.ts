import { z } from "zod"

const Config = z.object({
  DB_URL: z.string().url(),
  AUTH_SECRET: z.string(),
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string()
})
export const config: z.infer<typeof Config> = {
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE!,
  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID!,
  AUTH_SECRET: process.env.AUTH_SECRET!,
  DB_URL: process.env.DB_URL!,
}



