import User from "../interfaces/user_interface";
import UserModel from "../models/users";
import { generateToken } from "../utils/jwt_handle";
import { encrypt, verified } from "../utils/password_encrypt";

export const registerUser = async (data: User) => {
  const checkIs = await UserModel.findOne({ email: data.email });
  if (checkIs) {
    return "ALLREADY_USER";
  }

  console.log(data, "data");

  const registerNewUser = await UserModel.create({
    email: data.email,
    password: await encrypt(data.password),
    name: data.name,
    role: data.role,
  });

  return registerNewUser;
};

export const loginUser = async (data: User) => {
  const checkIs = await UserModel.findOne({ email: data.email });

  if (!checkIs) return "NOT_FOUND_USER";

  const isConfirm = await verified(data.password, checkIs.password);
  if (!isConfirm) return "PASSWORD_INCORRECT";

  const token = await generateToken(checkIs.email);
  const reponse = {
    token,
    user: checkIs,
  };
  return reponse;
};
