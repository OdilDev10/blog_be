import { ObjectId } from "mongoose";
import CardModel from "../models/cards";
import Cards from "../interfaces/cards_interfaces";

export const getAllCards = async () => {
  const cards = await CardModel.find({});
  return cards;
};

export const postOneCard = async (data: Cards) => {
  const card = await CardModel.create({
    subscriber: data.subscriber,
    cardHolderName: data.cardHolderName,
    cardNumber: data.cardNumber,
    code: data.code,
    expiryDate: data.expiryDate,
  });
  return card;
};

export const getOneCard = async (id: string | ObjectId) => {
  const card = await CardModel.find({ _id: id });
  return card;
};

export const updateCard = async (id: string | ObjectId, data: Cards) => {
  const card = await CardModel.findOneAndUpdate(
    { _id: id },
    {
      subscriber: data.subscriber,
      cardHolderName: data.cardHolderName,
      cardNumber: data.cardNumber,
      code: data.code,
      expiryDate: data.expiryDate,
    },
    {
      new: true,
    }
  );
  return card;
};

export const deleteCard = async (id: string | ObjectId) => {
  const card = await CardModel.findOneAndDelete({ _id: id });
  return card;
};
