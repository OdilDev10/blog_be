import { Request, Response } from "express";
import handleHttp from "../utils/error_handle";
import {
  deletePost,
  getAllPosts,
  getOnePost,
  postOnePost,
  updatePost,
} from "../services/posts";

export const getAllPostsCtrl = async (req: Request, res: Response) => {
  try {
    const posts = await getAllPosts();
    res.status(200).send(posts);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ALL_POSTS");
  }
};

export const postPostsCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const post = await postOnePost(body);
    res.status(200).send(post);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_CREATING_POSTS");
  }
};

export const getOnePostsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await getOnePost(id);
    res.status(200).send(post);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ONE_POST");
  }
};

export const updatePostsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const post = await updatePost(id, body);
    res.status(200).send(post);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_POSTS");
  }
};

export const deletePostsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const posts = await deletePost(id);
    res.status(200).send(posts);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_DELETING_POSTS");
  }
};
