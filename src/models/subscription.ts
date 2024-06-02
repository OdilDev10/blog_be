import { Schema, model } from "mongoose";
import { Subscription } from "../interfaces/plans_interfaces";

const SubscriptionSchema = new Schema<Subscription>(
  {
    plan: { type: Schema.Types.ObjectId, ref: "Plan", required: true },
    subscriber: { type: Schema.Types.ObjectId, required: true },
    blog: { type: Schema.Types.ObjectId, ref: "User", required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    active: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    deleted_at: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SubscriptionModel = model<Subscription>(
  "Subscription",
  SubscriptionSchema
);

export default SubscriptionModel;
