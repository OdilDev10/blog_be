import { Schema, model } from "mongoose";
import { Plan } from "../interfaces/plans_interfaces";

const PlanSchema = new Schema<Plan>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    disabled: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    deleted_at: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PlanModel = model<Plan>("Plan", PlanSchema);

export default PlanModel;
