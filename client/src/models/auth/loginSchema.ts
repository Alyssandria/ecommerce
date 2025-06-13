import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(2, { message: "Username must at least have 2 characters" }),
  password: z.string().min(8, { message: "Password must at least have 8 characters" })
})
