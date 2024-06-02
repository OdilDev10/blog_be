import { Request, Response } from "express";
import handleHttp from "../utils/error_handle";
import {
  deleteComment,
  getAllComments,
  getOneComment,
  postOneComment,
  updateComment,
} from "../services/comment";

export const getAllCommentsCtrl = async (req: Request, res: Response) => {
  try {
    const comments = await getAllComments();
    res.status(200).send(comments);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ALL_COMMENTS");
  }
};

export const postCommentsCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const comment = await postOneComment(body);
    res.status(200).send(comment);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_CREATING_COMMENTS");
  }
};

export const getOneCommentsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const comment = await getOneComment(id);
    res.status(200).send(comment);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_GETTING_ONE_COMMENT");
  }
};

export const updateCommentsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const comment = await updateComment(id, body);
    res.status(200).send(comment);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_UPDATING_COMMENTS");
  }
};

export const deleteCommentsCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const comments = await deleteComment(id);
    res.status(200).send(comments);
  } catch (error) {
    handleHttp(res, `${error}`, "ERROR_DELETING_COMMENTS");
  }
};
