import { NextFunction, Response } from "express";
import RequestExtendida from "../interfaces/request_extendida";

const logMiddleware = (
  req: RequestExtendida,
  res: Response,
  next: NextFunction
) => {
  console.log("Pasando por LOG", req.headers["user-agent"]);
  next();
};

export default logMiddleware;
