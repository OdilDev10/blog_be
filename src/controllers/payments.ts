import { Request, Response } from "express";
import handleHttp from "../utils/error_handle";
import {
  deletePayment,
  getAllPayments,
  getOnePayment,
  postOnePayment,
  updatePayment,
} from "../services/payments";

export const getAllPaymentsCtrl = async (req: Request, res: Response) => {
  try {
    const payments = await getAllPayments();
    res.status(200).send(payments);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ALL_PAYMENTS");
  }
};

export const postPaymentsCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const payment = await postOnePayment(body);
    res.status(200).send(payment);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_PAYMENTS");
  }
};

export const getOnePaymentsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payment = await getOnePayment(id);
    res.status(200).send(payment);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ONE_PAYMENT");
  }
};

export const updatePaymentsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const payment = await updatePayment(id, body);
    res.status(200).send(payment);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_PAYMENTS");
  }
};

export const deletePaymentsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payments = await deletePayment(id);
    res.status(200).send(payments);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_DELETING_PAYMENTS");
  }
};
