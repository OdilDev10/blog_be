import { ObjectId } from "mongoose";
import StatusModel from "./status_models_interface";

export default interface Blog extends StatusModel{
  name: string;
  description: string;
  user: string | ObjectId;
  tags: string[];
  posts: ObjectId[];
}
