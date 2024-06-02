import { Router } from "express";
import {
  deletePostsCtrl,
  getAllPostsCtrl,
  getOnePostsCtrl,
  postPostsCtrl,
  updatePostsCtrl,
} from "../controllers/posts";
import { checkJwt } from "../middlewares/session_middleware";
import { RoleValidStaffOrUser, RoleValidUser } from "../middlewares/role_valid";

const posts_router = Router();
/**
 * @swagger
 * /posts:
 *   get:
 *     tags:
 *       - POSTS
 *     summary: Get all posts
 *     responses:
 *       200:
 *         description: List of posts
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
 *                   author:
 *                     type: string
 *                   tags:
 *                     type: array
 *                     items:
 *                       type: string
 *                   createdAt:
 *                     type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *                   updatedAt:
 *                     type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *                   published:
 *                     type: boolean
 *                   comments:  # Assuming 'comments' is an array of ObjectIds
 *                     type: array
 *                     items:
 *                       type: string
 *                 required:
 *                   - title
 *                   - content
 *                   - author
 *                   - published
 */
posts_router.get("/posts", checkJwt, RoleValidStaffOrUser, getAllPostsCtrl);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     tags:
 *       - POSTS
 *     summary: Get one post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: One post
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
 *                 author:
 *                   type: string
 *                 tags:
 *                   type: array
 *                   items:
 *                     type: string
 *                 createdAt:
 *                   type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *                 updatedAt:
 *                   type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *                 published:
 *                   type: boolean
 *                 comments:  # Assuming 'comments' is an array of ObjectIds
 *                     type: array
 *                     items:
 *                       type: string
 */
posts_router.get("/posts/:id", checkJwt, RoleValidStaffOrUser, getOnePostsCtrl);

/**
 * @swagger
 * /posts:
 *   post:
 *     tags:
 *       - POSTS
 *     summary: Create a post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - author
 *               - published
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               published:
 *                 type: boolean
 */
posts_router.post("/posts", checkJwt, RoleValidUser, postPostsCtrl);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     tags:
 *       - POSTS
 *     summary: Update a post
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
 *               author:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               published:
 *                 type: boolean
 */
posts_router.put("/posts/:id", checkJwt, RoleValidUser, updatePostsCtrl);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     tags:
 *       - POSTS
 *     summary: Delete a post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Delete post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
posts_router.delete("/posts/:id", checkJwt, RoleValidUser, deletePostsCtrl);

export default posts_router;
