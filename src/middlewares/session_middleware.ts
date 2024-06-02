import { NextFunction, Response } from "express";
import RequestExtendida from "../interfaces/request_extendida";
import { verifyToken } from "../utils/jwt_handle";
import UserModel from "../models/users";
import LogModel from "../models/logs";
import handleHttp from "../utils/error_handle";

export const checkJwt = async (
  req: RequestExtendida,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtUser = req.headers.authorization || null;
    const jwt = jwtUser?.split(" ").pop();
    const isUserEmail = verifyToken(`${jwt}`);

    console.log(isUserEmail, "isUserEmail");

    if (!isUserEmail) {
      res.status(401).send("JWT_NO_VALIDO");
      return;
    }

    // Find user by email in the database
    const user = await UserModel.findOne({ email: isUserEmail });

    if (!user) {
      res.status(404).send("USUARIO_NO_ENCONTRADO");
      return;
    }

    // Log the request details
    await LogModel.create({
      client: isUserEmail,
      url: req.originalUrl,
      agent: req.headers["user-agent"],
      ip: req.ip,
      method: req.method,
    });

    // Attach user to the request object
    req.user = user;

    next();
  } catch (error) {
    handleHttp(res, `${error}`, "SESSION_NO_VALIDA");
  }
};
