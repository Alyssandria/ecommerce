import { type RequestHandler } from "express";
import bcrypt from "bcrypt"
import { sendResponse } from "../lib/utils/sendResponse";
import { createUser, findUserByEmail, UserRegisterModel } from "../model/user.model";

export const SignUpController: RequestHandler = async (req, res) => {
  const parsed = UserRegisterModel.safeParse(req.body);

  if (!parsed.success) {
    return sendResponse(res, {
      message: "Invalid Input",
      error: parsed.error.format()
    })
  }

  try {
    const { email, username, password } = parsed.data;

    const existing = await findUserByEmail(email);

    if (existing.length > 0) {
      return sendResponse(res, {
        message: "Email Already Exists",
        error: {
          fields: "email"
        }
      }, 409)
    }

    const hashed = await bcrypt.hash(password, 12);

    await createUser({
      email,
      username,
      password: hashed
    })

    return sendResponse(res, {
      message: "User successfully created",
      data: {
        email,
        username
      }
    }, 201)

  } catch (error) {
    console.error(error);
    return sendResponse(res, {
      message: "Internal Server Error",
      error: {
        status: 500,
        message: "Something happened, try again later",
      }
    }, 500)

  }
}
