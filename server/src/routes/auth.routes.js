import { Router } from "express";
import { login, logout, session } from "../controllers/auth.controller.js";
import  validateJwt from "../middleware/validateJwt.js";

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/logout', validateJwt, logout);
authRouter.get('/session', validateJwt, session)

export { authRouter };