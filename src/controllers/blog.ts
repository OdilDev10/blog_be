import { Request, Response } from "express";
import handleHttp from "../utils/error_handle";
import {
  getAllBlogs,
  postOneBlog,
  getOneBlog,
  updateBlog,
  deleteBlog,
} from "../services/blog";

export const getAllBlogsCtrl = async (req: Request, res: Response) => {
  try {
    const blogs = await getAllBlogs();
    res.status(200).send(blogs);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ALL_BLOGS");
  }
};

export const postBlogsCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const blog = await postOneBlog(body);
    res.status(200).send(blog);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_BLOGS");
  }
};

export const getOneBlogsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blog = await getOneBlog(id);
    res.status(200).send(blog);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ONE_BLOG");
  }
};

export const updateBlogsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const blog = await updateBlog(id, body);
    res.status(200).send(blog);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_BLOGS");
  }
};

export const deleteBlogsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blogs = await deleteBlog(id);
    res.status(200).send(blogs);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_DELETING_BLOGS");
  }
};
