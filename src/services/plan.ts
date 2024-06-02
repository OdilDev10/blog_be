import { ObjectId } from "mongoose";
import PlanModel from "../models/plan";
import { Plan } from "../interfaces/plans_interfaces";

export const getAllPlans = async () => {
  const plans = await PlanModel.find({});
  return plans;
};

export const postOnePlan = async (data: Plan) => {
  const plan = await PlanModel.create({ data });
  return plan;
};

export const getOnePlan = async (id: string | ObjectId) => {
  const plan = await PlanModel.find({ _id: id });
  return plan;
};

export const updatePlan = async (id: string | ObjectId, data: Plan) => {
  const plan = await PlanModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return plan;
};

export const deletePlan = async (id: string | ObjectId) => {
  const plan = await PlanModel.findOneAndDelete({ _id: id });
  return plan;
};
