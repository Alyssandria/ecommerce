import { type RequestHandler } from "express";
import bcrypt from "bcrypt"
import { findUserByEmail, UserLoginModel } from "../model/user.model";
import { sendResponse } from "../lib/utils/sendResponse";
import { signToken } from "../lib/utils/jwt";

export const LoginController: RequestHandler = async (req, res) => {
  const parsed = UserLoginModel.strict().safeParse(req.body);

  if (!parsed.success) {
    return sendResponse(res, {
      message: "Invalid Input",
      error: parsed.error.format()
    }, 400)
  }

  const { email, password } = parsed.data;

  try {
    const existing = await findUserByEmail(email);

    if (!existing.length) {
      return sendResponse(res, {
        message: "There is no user of that email address",
        error: {
          email
        }
      }, 404)
    }

    if (!existing[0].password) {
      return sendResponse(res, {
        message: "Email exists but don't have a password set",
        error: {
          email
        }
      }, 409)
    }

    const result = await bcrypt.compare(password, existing[0].password)

    if (!result) {
      return sendResponse(res, {
        message: "Incorrect Password",
        error: "Unauthorized request. Password does not match the right credentials"
      }, 401)
    }

    return sendResponse(res, {
      message: "Login Successful",
      data: {
        token: signToken({
          userId: existing[0].id,
          email: email
        })
      }
    })

  } catch (error) {
    console.error(`There was an error: ${error}`);
    return sendResponse(res, {
      message: "Internal Server Error",
      error: {
        status: 500,
        message: "Something happened, try again later",
      }
    }, 500)
  }

}
