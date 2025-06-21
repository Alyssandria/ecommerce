import { type Response } from "express";

interface SuccessResponse<T> {
  message: string,
  data: T
}

interface ErrorResponse<T> {
  message: string,
  error: T
}

export const sendResponse = <T>(res: Response, message: SuccessResponse<T> | ErrorResponse<T>, code: number = 200) => {
  res.status(code).json({
    success: code < 300,
    details: message
  })
}
