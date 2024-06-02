import { Router } from "express";
import {
  getAllCommentsCtrl,
  getOneCommentsCtrl,
  postCommentsCtrl,
  updateCommentsCtrl,
  deleteCommentsCtrl,
} from "../controllers/commet";

const comments_router = Router();

/**
 * @swagger
 * /comments:
 *   get:
 *     tags:
 *       - COMMENTS
 *     summary: Get all comments
 *     responses:
 *       200:
 *         description: List of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   post:
 *                     type: string
 *                   author:
 *                     type: string
 *                   authorType:
 *                     type: string
 *                   status:  # Assuming 'status' is a property inherited from StatusModel
 *                     type: string
 */
comments_router.get("/comments", getAllCommentsCtrl);

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     tags:
 *       - COMMENTS
 *     summary: Get one comment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: One comment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *                 post:
 *                     type: string
 *                 author:
 *                     type: string
 *                 authorType:
 *                     type: string
 *                 status:  # Assuming 'status' is a property inherited from StatusModel
 *                     type: string
 */
comments_router.get("/comments/:id", getOneCommentsCtrl);

/**
 * @swagger
 * /comments:
 *   post:
 *     tags:
 *       - COMMENTS
 *     summary: Create a comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - post
 *               - author
 *               - authorType
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               post:
 *                 type: string
 *               author:
 *                 type: string
 *               authorType:
 *                 type: string
 */
comments_router.post("/comments", postCommentsCtrl);

/**
 * @swagger
 * /comments/{id}:
 *   put:
 *     tags:
 *       - COMMENTS
 *     summary: Update a comment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               post:
 *                 type: string
 *               author:
 *                 type: string
 *               authorType:
 *                 type: string
 */
comments_router.put("/comments/:id", updateCommentsCtrl);

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     tags:
 *       - COMMENTS
 *     summary: Delete a comment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Delete comment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
comments_router.delete("/comments/:id", deleteCommentsCtrl);

export default comments_router;