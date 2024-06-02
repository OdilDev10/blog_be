import { ObjectId } from "mongoose";
import StatusModel from "./status_models_interface";

export interface Subscription extends StatusModel{
  plan: string | ObjectId;
  subscriber: string | ObjectId;
  blog: string | ObjectId; // The user who owns the blog
  startDate: Date;
  endDate: Date;
  active: boolean;
}

export interface Plan extends StatusModel{
  name: string;
  description: string;
  price: number;
  duration: number; // Duration in days
}
