import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import User from "./user_interface";

export default interface RequestExtendida extends Request {
  user?: User;
}
