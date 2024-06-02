import { ObjectId } from "mongoose";
import SubscriptionModel from "../models/subscription";
import { Subscription } from "../interfaces/plans_interfaces";

export const getAllSubscriptions = async () => {
  const suscriptions = await SubscriptionModel.find({});
  return suscriptions;
};

export const postOneSubscription = async (data: Subscription) => {
  const suscription = await SubscriptionModel.create({ data });
  return suscription;
};

export const getOneSubscription = async (id: string | ObjectId) => {
  const suscription = await SubscriptionModel.find({ _id: id });
  return suscription;
};

export const updateSubscription = async (
  id: string | ObjectId,
  data: Subscription
) => {
  const suscription = await SubscriptionModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return suscription;
};

export const deleteSubscription = async (id: string | ObjectId) => {
  const suscription = await SubscriptionModel.findOneAndDelete({ _id: id });
  return suscription;
};
