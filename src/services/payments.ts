import { ObjectId } from "mongoose";
import Payment from "../interfaces/payment_interface";
import PaymentModel from "../models/payments";

export const getAllPayments = async () => {
  const payments = await PaymentModel.find({});
  return payments;
};

export const postOnePayment = async (data: Payment) => {
  const payment = await PaymentModel.create({ data });
  return payment;
};

export const getOnePayment = async (id: string | ObjectId) => {
  const payment = await PaymentModel.find({ _id: id });
  return payment;
};

export const updatePayment = async (id: string | ObjectId, data: Payment) => {
  const payment = await PaymentModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return payment;
};

export const deletePayment = async (id: string | ObjectId) => {
  const payment = await PaymentModel.findOneAndDelete({ _id: id });
  return payment;
};
