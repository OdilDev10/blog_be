import { ObjectId } from "mongoose";
import Post from "../interfaces/post_interface";
import PostModel from "../models/posts";

export const getAllPosts = async () => {
  const posts = await PostModel.find({});
  return posts;
};

export const postOnePost = async (data: Post) => {
  const post = await PostModel.create({ data });
  return post;
};

export const getOnePost = async (id: string | ObjectId) => {
  const post = await PostModel.find({ _id: id });
  return post;
};

export const updatePost = async (id: string | ObjectId, data: Post) => {
  const post = await PostModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return post;
};

export const deletePost = async (id: string | ObjectId) => {
  const post = await PostModel.findOneAndDelete({ _id: id });
  return post;
};
