import { eq } from "drizzle-orm"
import { db } from "../db/db"
import { users } from "../db/schema"
import z from "zod"

const PASSWORD_MIN = 8;
const USERNAME_MIN = 2;

export const UserLoginModel = z.object({
  email: z.string().email({ message: "Must be a valid email" }),
  password: z.string().min(PASSWORD_MIN, { message: `Must be at least ${PASSWORD_MIN}  characters` })
})

export const UserRegisterModel = UserLoginModel.extend({
  username: z.string().min(USERNAME_MIN, { message: `Must be at least ${USERNAME_MIN}  characters` })
})

export const findUserByEmail = (email: string) => (
  db.select().from(users).where(eq(users.email, email)).limit(1)
)

export const createUser = (data: z.infer<typeof UserRegisterModel>) => (
  db.insert(users).values(data)
)



