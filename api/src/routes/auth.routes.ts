import { Router } from "express";
import ROUTES from "../lib/constants/routes";
import { LoginController } from "../controller/login.controller";
import { SignUpController } from "../controller/signup.controller";

const router = Router();

router.post(ROUTES.AUTH.LOGIN, LoginController)
router.post(ROUTES.AUTH.SIGNUP, SignUpController)


export default router


