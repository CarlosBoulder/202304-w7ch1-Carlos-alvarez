import { Schema, model } from "mongoose";

const robotSchema = new Schema({
  name: String,
  speed: Number,
  endurance: Number,
  created: String,
  img_source: String,
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
