import "./loadEnvironment.js";
import app from "./server/index.js";
import mongoose from "mongoose";
import createDebug from "debug";

const debug = createDebug("robots-api:root");

const port = process.env.PORT ?? 4000;
const mongoDbConnection = process.env.MONGODB_CONNECTION;

if (!mongoDbConnection) {
  debug("missing environment variables");
  process.exit(1);
}

app.listen(port, () => {
  debug(`Listening on http://localhost:${port}`);
});

try {
  await mongoose.connect(mongoDbConnection);
  debug("Connected to DataBase");
} catch (error: unknown) {
  debug(`Error connecting DataBase: ${(error as Error).message}`);
}
