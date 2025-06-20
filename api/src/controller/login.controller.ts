import { Request, Response } from "express";

export const LoginController = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    res.status(200).json({
      data: {
        username,
        password
      }
    })
  } catch (error) {
    console.error(`There was an error: ${error}`);
  }

}
