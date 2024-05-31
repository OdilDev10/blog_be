import { sign, verify } from "jsonwebtoken";
import { ObjectId } from "mongoose";
const JWT_SECRET = process.env.JWT_SECRET || "secreto.01";

export const generateToken = async (id: string) => {
  const jwt = await sign(id, JWT_SECRET, {});

  return jwt;
};

export const verifyToken = (jwt: string) => {
  return verify(jwt, JWT_SECRET);
};
