import { Response } from "express";

import handleHttp from "../utils/error_handle";
import RequestExtendida from "../interfaces/request_extendida";
import { registerUser, loginUser } from "../services/auth";

export const registerCtrl = async (req: RequestExtendida, res: Response) => {
  try {
    const response = await registerUser(req.body);
    res.send(response);
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

export const loginCtrl = async (req: RequestExtendida, res: Response) => {
  try {
    const data = req.body;
    const user = await loginUser(data);
    res.send(user);
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};
