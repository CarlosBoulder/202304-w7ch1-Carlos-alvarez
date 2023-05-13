import "./loadEnvironment.js";
import app from "./server/index.js";
import mongoose from "mongoose";

const port = process.env.PORT ?? 4000;
const mongoDbConnection = process.env.MONGODB_CONNECTION;

if (!mongoDbConnection) {
  console.log("missing environment variables");
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

try {
  await mongoose.connect(mongoDbConnection);
  console.log("Connected to DataBase");
} catch (error: unknown) {
  console.log(`Error connecting DataBase: ${(error as Error).message}`);
}
