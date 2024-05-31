import { ObjectId } from "mongoose";
import StatusModel from "./status_models_interface";

export default interface Comment extends StatusModel {
  title: string;
  content: string;
  post: string | ObjectId;
  author: string | ObjectId;
  authorType: "User" | "Client";
}
