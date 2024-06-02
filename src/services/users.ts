import { ObjectId } from "mongoose";
import UserModel from "../models/users";
import User from "../interfaces/user_interface";

export const getAllUsers = async () => {
  const users = await UserModel.find({});
  return users;
};

export const getOneUser = async (id: string | ObjectId) => {
  const users = await UserModel.find({ _id: id });
  return users;
};

export const updateUser = async (id: string | ObjectId, data: User) => {
  const users = await UserModel.findOneAndUpdate(
    { _id: id },
    {
      email: data.email,
      name: data.name,
      password: data.password,
      photos: data.photos,
      role: data.role,
      disabled: data.disabled,
      deleted: data.deleted,
      deleted_at: data.deleted_at,
    },
    {
      new: true,
    }
  );
  return users;
};

export const deleteUser = async (id: string | ObjectId) => {
  const users = await UserModel.findOneAndDelete({ _id: id });
  return users;
};
