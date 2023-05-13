import express from "express";
import morgan from "morgan";
import robotsRouter from "./routers/robots/robotsRouter.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/robots", robotsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint no found" });
});

export default app;
