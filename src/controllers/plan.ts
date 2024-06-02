import { Request, Response } from "express";
import handleHttp from "../utils/error_handle";
import {
  getAllPlans,
  postOnePlan,
  getOnePlan,
  updatePlan,
  deletePlan,
} from "../services/plan";

export const getAllPlansCtrl = async (req: Request, res: Response) => {
  try {
    const plans = await getAllPlans();
    res.status(200).send(plans);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ALL_PLANS");
  }
};

export const postPlansCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const plan = await postOnePlan(body);
    res.status(200).send(plan);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_CREATING_PLANS");
  }
};

export const getOnePlansCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const plan = await getOnePlan(id);
    res.status(200).send(plan);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ONE_PLAN");
  }
};

export const updatePlansCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const plan = await updatePlan(id, body);
    res.status(200).send(plan);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_PLANS");
  }
};

export const deletePlansCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const plans = await deletePlan(id);
    res.status(200).send(plans);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_DELETING_PLANS");
  }
};
