import { Router } from "express";
import loginUser from "../../controllers/users/userControllers.js";

const loginRouter = Router();

loginRouter.get("/", loginUser);

export default loginRouter;
