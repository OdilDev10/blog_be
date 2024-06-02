import { Router } from "express";

import { checkJwt } from "../middlewares/session_middleware";
import {
  deleteBlogsCtrl,
  getAllBlogsCtrl,
  getOneBlogsCtrl,
  postBlogsCtrl,
  updateBlogsCtrl,
} from "../controllers/blog";

const blogs_router = Router();

/**
 * @swagger
 * /blogs:
 *   get:
 *     tags:
 *       - BLOGS
 *     summary: Get all blogs
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   user:
 *                     type: string
 *                   tags:
 *                     type: array
 *                     items:
 *                       type: string
 *                   posts:
 *                     type: array
 *                     items:
 *                       type: string
 */
blogs_router.get("/blogs", checkJwt, getAllBlogsCtrl);

/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     tags:
 *       - BLOGS
 *     summary: Get one blog
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: One blog
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 user:
 *                   type: string
 *                 tags:
 *                   type: array
 *                   items:
 *                     type: string
 *                 posts:
 *                   type: array
 *                   items:
 *                     type: string
 */
blogs_router.get("/blogs/:id", checkJwt, getOneBlogsCtrl);

/**
 * @swagger
 * /blogs:
 *   post:
 *     tags:
 *       - BLOGS
 *     summary: Create a blog
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               user:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Blog created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
blogs_router.post("/blogs", checkJwt, postBlogsCtrl);

/**
 * @swagger
 * /blogs/{id}:
 *   put:
 *     tags:
 *       - BLOGS
 *     summary: Update a blog
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Blog updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
blogs_router.put("/blogs/:id", checkJwt, updateBlogsCtrl);

/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     tags:
 *       - BLOGS
 *     summary: Delete a blog
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
blogs_router.delete("/blogs/:id", checkJwt, deleteBlogsCtrl);

export default blogs_router;
