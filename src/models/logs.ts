import { Schema, model } from "mongoose";
import Logs from "../interfaces/logs";

const LogSchema = new Schema<Logs>(
  {
    client: { type: String, required: true },
    method: { type: String, required: true },
    url: { type: String, required: true },
    ip: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    deleted_at: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const LogModel = model("Log", LogSchema);

export default LogModel;
