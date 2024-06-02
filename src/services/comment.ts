import { ObjectId } from "mongoose";
import CommentModel from "../models/comments";
import Comment from "../interfaces/commet_interface";

export const getAllComments = async () => {
  const comments = await CommentModel.find({});
  return comments;
};

export const postOneComment = async (data: Comment) => {
  const comment = await CommentModel.create({ data });
  return comment;
};

export const getOneComment = async (id: string | ObjectId) => {
  const comment = await CommentModel.find({ _id: id });
  return comment;
};

export const updateComment = async (id: string | ObjectId, data: Comment) => {
  const comment = await CommentModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return comment;
};

export const deleteComment = async (id: string | ObjectId) => {
  const comment = await CommentModel.findOneAndDelete({ _id: id });
  return comment;
};
