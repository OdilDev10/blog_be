import { ObjectId } from "mongoose";
import Client from "../interfaces/client_interface";
import ClientModel from "../models/clients";

export const getAllClients = async () => {
  const clients = await ClientModel.find({});
  return clients;
};

export const postOneClient = async (data: Client) => {
  const client = await ClientModel.create({ data });
  return client;
};

export const getOneClient = async (id: string | ObjectId) => {
  const client = await ClientModel.find({ _id: id });
  return client;
};

export const updateClient = async (id: string | ObjectId, data: Client) => {
  const client = await ClientModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return client;
};

export const deleteClient = async (id: string | ObjectId) => {
  const client = await ClientModel.findOneAndDelete({ _id: id });
  return client;
};
