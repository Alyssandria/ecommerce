import { Request, Response } from "express";
import { db } from "../db/db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt"

export const SignUpController = async (req: Request, res: Response) => {
  console.log("Hello World");
  try {
    const { email, username, password } = req.body;

    const existing = await db.select().from(users).where(eq(users.email, email))

    if (existing.length > 0) {
      res.status(409).json({
        success: false,
        message: "Email already exists",
        error: {
          details: {
            data: email,
            field: "email",
          }
        }
      })
    }

    const hashed = await bcrypt.hash(password, 12);

    console.log(hashed);

    await db.insert(users).values({
      email,
      username,
      password: hashed
    })

  } catch (error) {
    console.log(error)

  }
}
