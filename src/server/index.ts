import express from "express";
import morgan from "morgan";
import cors from "cors";
import robotsRouter from "./routers/robots/robotsRouter.js";
import { generalError, notFoundError } from "./middlewares/errorMiddlewares.js";
import { auth } from "./middlewares/authMiddleware.js";
import loginRouter from "./routers/users/loginRouter.js";

const allowedOrigins = [
  "http://localhost:5173",
  "https://202304-w6chwe-luis-caballe-carlos-alv.netlify.app",
];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

app.use(cors(options));

app.use(express.json());

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use("/login", loginRouter);

app.use("/robots", auth, robotsRouter);

app.use(notFoundError);

app.use(generalError);

export default app;
