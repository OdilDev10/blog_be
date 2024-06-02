import { Router } from "express";
import {
  deleteUsersCtrl,
  getAllUsersCtrl,
  getOneUsersCtrl,
  updateUsersCtrl,
} from "../controllers/users";
import { checkJwt } from "../middlewares/session_middleware";

const users_router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - USERS
 *     summary: Get all users
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 */
users_router.get("/users", checkJwt, getAllUsersCtrl);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - USERS
 *     summary: Get one user
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
 *         description: One user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
users_router.get("/users/:id", checkJwt, getOneUsersCtrl);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags:
 *       - USERS
 *     summary: Update user
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Update user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
users_router.put("/users/:id", checkJwt, updateUsersCtrl);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - USERS
 *     summary: Delete user
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
 *         description: Delete user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
users_router.delete("/users/:id", checkJwt, deleteUsersCtrl);

export default users_router;
