import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export default interface RequestExtendida extends Request {
  user?: string | JwtPayload;
}
