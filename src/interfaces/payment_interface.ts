import { ObjectId } from "mongoose";
import StatusModel from "./status_models_interface";

export default interface Payment extends StatusModel{
  subscription: string | ObjectId;
  amount: number;
  date: Date;
  status: 'Pending' | 'Completed' | 'Failed';
}
