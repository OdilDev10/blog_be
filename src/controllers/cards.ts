import { Request, Response } from "express";
import handleHttp from "../utils/error_handle";
import {
  getAllCards,
  postOneCard,
  getOneCard,
  updateCard,
  deleteCard,
} from "../services/cards";

export const getAllCardsCtrl = async (req: Request, res: Response) => {
  try {
    const cards = await getAllCards();
    res.status(200).send(cards);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ALL_CARDS");
  }
};

export const postCardsCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const card = await postOneCard(body);
    res.status(200).send(card);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_CREATING_CARDS");
  }
};

export const getOneCardsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const card = await getOneCard(id);
    res.status(200).send(card);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ONE_CARD");
  }
};

export const updateCardsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const card = await updateCard(id, body);
    res.status(200).send(card);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_CARDS");
  }
};

export const deleteCardsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cards = await deleteCard(id);
    res.status(200).send(cards);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_DELETING_CARDS");
  }
};
