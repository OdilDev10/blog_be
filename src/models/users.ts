import { Schema, model } from "mongoose";
import User from "../interfaces/user_interface";
import CardSchema from "./cards";
import RoleEnum from "../enums/role_enum";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: { type: String, required: true, enum: RoleEnum },
    photos: { type: [String], required: true },
    disabled: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    deleted_at: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("users", UserSchema);

export default UserModel;
