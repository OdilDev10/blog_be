import { ObjectId } from "mongoose";

export default interface StatusModel {
  disabled: boolean;
  deleted: boolean;
  deleted_at?: Date;
}
