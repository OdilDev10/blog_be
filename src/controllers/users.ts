import { Request, Response } from "express";
import {
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
} from "../services/users";
import handleHttp from "../utils/error_handle";

export const getAllUsersCtrl = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ALL_USERS");
  }
};

export const getOneUsersCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getOneUser(id);
    res.status(200).send(user);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ONE_USER");
  }
};

export const updateUsersCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = await updateUser(id, body);
    res.status(200).send(user);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_USERS");
  }
};

export const deleteUsersCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const users = await deleteUser(id);
    res.status(200).send(users);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_DELETING_USERS");
  }
};
