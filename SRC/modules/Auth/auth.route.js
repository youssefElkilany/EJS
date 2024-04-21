import { Router } from "express";
import * as authController from "./controller/auth.js"
//import auth from "../../MiddleWare/Auth.js";
const router = Router()

router.get("/getSignUp",authController.getsignup)
router.post("/signUp",authController.signUp)

router.get('/getsignIn',authController.getlogin)
router.post('/login',authController.login)

export default router