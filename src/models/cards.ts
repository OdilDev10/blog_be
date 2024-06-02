import { Schema, Types, model, Model } from "mongoose";
import Cards from "../interfaces/cards_interfaces";

const CardSchema = new Schema<Cards>({
  subscriber: { type: Schema.Types.ObjectId, required: true },
  subscriberType: { type: String, required: true, enum: ["User", "Client"] },
  cardNumber: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cardHolderName: { type: String, required: true },
  code: { type: Number, required: true },
  disabled: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false },
  deleted_at: { type: Date },
});

const CardModel = model("cards", CardSchema);

export default CardModel;
