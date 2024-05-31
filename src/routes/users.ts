import { Router } from "express";
import {
  deleteUsersCtrl,
  getAllUsersCtrl,
  getOneUsersCtrl,
  updateUsersCtrl,
} from "../controllers/users";

const users_router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - USERS
 *     summary: Get all users
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
users_router.get("/users", getAllUsersCtrl);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - USERS
 *     summary: Get one users
 *     responses:
 *       200:
 *         description: One users
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
users_router.get("/users/:id", getOneUsersCtrl);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags:
 *       - USERS
 *     summary: Update users
 *     responses:
 *       200:
 *         description: Update users
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
users_router.put("/users/:id", updateUsersCtrl);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - USERS
 *     summary: Delete users
 *     responses:
 *       200:
 *         description: Delete users
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
users_router.delete("/users/:id", deleteUsersCtrl);

export default users_router;
