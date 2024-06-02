import { ObjectId } from "mongoose";
import Blog from "../interfaces/blog_interface";
import BlogModel from "../models/blog";

export const getAllBlogs = async () => {
  const blogs = await BlogModel.find({});
  return blogs;
};

export const postOneBlog = async (data: Blog) => {
  const blog = await BlogModel.create({ data });
  return blog;
};

export const getOneBlog = async (id: string | ObjectId) => {
  const blog = await BlogModel.find({ _id: id });
  return blog;
};

export const updateBlog = async (id: string | ObjectId, data: Blog) => {
  const blog = await BlogModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return blog;
};

export const deleteBlog = async (id: string | ObjectId) => {
  const blog = await BlogModel.findOneAndDelete({ _id: id });
  return blog;
};
