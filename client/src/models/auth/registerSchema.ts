import { z } from "zod";

const USERNAME_MIN = 2;
const PASSWORD_MIN = 8;
export const registerSchema = z.object({
  username: z.string().min(2, `Username must have at least ${USERNAME_MIN}`),
  email: z.string().email("Must be a valid email"),
  password: z.string().min(PASSWORD_MIN, `Username must have at least ${PASSWORD_MIN}`),
  confirm: z.string()
}).refine(val => val.password === val.confirm, {
  message: "Passwords don't match",
  path: ['confirm']
})
