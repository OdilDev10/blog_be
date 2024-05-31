import { ObjectId } from "mongoose";
import StatusModel from "./status_models_interface";

export default interface Cards extends StatusModel {
  user: ObjectId;
  cardHolderName: string;
  cardNumber: string;
  code: number;
  expiryDate: string;
}
