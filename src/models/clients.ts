import { Schema, model } from "mongoose";
import CardSchema from "./cards";
import Client from "../interfaces/client_interface";

const ClientSchema = new Schema<Client>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photos: { type: [String], required: true },
    disabled: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    deleted_at: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ClientModel = model("clients", ClientSchema);

export default ClientModel;
