import { ObjectId } from "mongoose";
import StatusModel from "./status_models_interface";
import RoleEnum from "../enums/role_enum";

export default interface User extends StatusModel {
  name: string;
  email: string;
  password: string;
  photos: string[];
  role: RoleEnum
}
