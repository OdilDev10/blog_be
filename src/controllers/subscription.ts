import { Request, Response } from "express";
import handleHttp from "../utils/error_handle";
import {
  getAllSubscriptions,
  postOneSubscription,
  getOneSubscription,
  updateSubscription,
  deleteSubscription,
} from "../services/subscription";

export const getAllSubscriptionsCtrl = async (req: Request, res: Response) => {
  try {
    const subscriptions = await getAllSubscriptions();
    res.status(200).send(subscriptions);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ALL_SUBSCRIPTIONS");
  }
};

export const postSubscriptionsCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const subscription = await postOneSubscription(body);
    res.status(200).send(subscription);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_SUBSCRIPTIONS");
  }
};

export const getOneSubscriptionsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const subscription = await getOneSubscription(id);
    res.status(200).send(subscription);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ONE_SUBSCRIPTION");
  }
};

export const updateSubscriptionsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const subscription = await updateSubscription(id, body);
    res.status(200).send(subscription);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_SUBSCRIPTIONS");
  }
};

export const deleteSubscriptionsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const subscriptions = await deleteSubscription(id);
    res.status(200).send(subscriptions);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_DELETING_SUBSCRIPTIONS");
  }
};
