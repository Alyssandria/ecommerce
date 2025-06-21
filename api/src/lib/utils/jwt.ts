import jwt from "jsonwebtoken"
import { env } from "../../config/env"

interface JwtPayload {
  userId: string,
  email: string,
}

const expiration = "1h"

export const signToken = (payload: JwtPayload) => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: expiration
  })
}
