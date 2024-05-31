import { Request, Response } from "express";
import handleHttp from "../utils/error_handle";
import {
  deleteClient,
  getAllClients,
  getOneClient,
  postOneClient,
  updateClient,
} from "../services/clients";

export const getAllClientsCtrl = async (req: Request, res: Response) => {
  try {
    const clients = await getAllClients();
    res.status(200).send(clients);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ALL_CLIENTS");
  }
};

export const postClientsCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const client = await postOneClient(body);
    res.status(200).send(client);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_CLIENTS");
  }
};

export const getOneClientsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const client = await getOneClient(id);
    res.status(200).send(client);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ONE_CLIENT");
  }
};

export const updateClientsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const client = await updateClient(id, body);
    res.status(200).send(client);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_CLIENTS");
  }
};

export const deleteClientsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const clients = await deleteClient(id);
    res.status(200).send(clients);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_DELETING_CLIENTS");
  }
};
