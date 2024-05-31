import { ObjectId } from "mongoose";
import StatusModel from "./status_models_interface";

export default interface Post extends StatusModel {
  title: string;
  content: string;
  author: string | ObjectId;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  comments: Comment[]; // Relación con el modelo Comment
}
