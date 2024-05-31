import { Schema, model } from "mongoose";
import Comment from "../interfaces/commet_interface";

const CommetSchema = new Schema<Comment>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    author: { type: Schema.Types.ObjectId, required: true },
    authorType: { type: String, required: true, enum: ["User", "Client"] },
    disabled: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    deleted_at: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
    discriminatorKey: "authorType",
  }
);

const CommentModel = model("comments", CommetSchema);

export default CommentModel;
