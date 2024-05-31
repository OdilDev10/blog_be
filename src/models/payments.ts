import { Schema, model } from "mongoose";
import Payment from "../interfaces/payment_interface";

const PaymentSchema = new Schema<Payment>(
  {
    subscription: {
      type: Schema.Types.ObjectId,
      ref: "Subscription",
      required: true,
    },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Completed", "Failed"],
      default: "Pending",
    },
    disabled: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    deleted_at: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PaymentModel = model<Payment>("Payment", PaymentSchema);

export default PaymentModel;
