  import { NextFunction, Response } from "express";
  import RequestExtendida from "../interfaces/request_extendida";
  import { verifyToken } from "../utils/jwt_handle";

  export const checkJwt = (
    req: RequestExtendida,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const jwtUser = req.headers.authorization || null;
      const jwt = jwtUser?.split(" ").pop();
      const isUserEmail = verifyToken(`${jwt}`);

      console.log(isUserEmail);
      if (!isUserEmail) {
        res.status(401);
        res.send("JWT_NO_VALIDO");
      } else {
        req.user = isUserEmail;

        next();
      }
    } catch (error) {
      res.status(400);
      res.send("SESSION_NO_VALIDA");
    }
  };
