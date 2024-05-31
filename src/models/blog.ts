import { Schema, model, Document } from "mongoose";
import Blog from "../interfaces/blog_interface";

const BlogSchema = new Schema<Blog>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    tags: { type: [String], required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    disabled: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    deleted_at: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BlogModel = model("Blog", BlogSchema);

export default BlogModel;
