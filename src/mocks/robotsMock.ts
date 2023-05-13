import { Types } from "mongoose";
import { type RobotsMockStructure } from "../types";

const robotsMock: RobotsMockStructure[] = [
  {
    _id: new Types.ObjectId(),
    name: "War Eagle",
    speed: 10,
    endurance: 10,
    created: "2000/01/01",
    imgSource: "image-source-url",
  },
];

export default robotsMock;
