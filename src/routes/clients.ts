import { Router } from "express";
import {
  deleteClientsCtrl,
  getAllClientsCtrl,
  getOneClientsCtrl,
  postClientsCtrl,
  updateClientsCtrl,
} from "../controllers/clients";

const clients_router = Router();

/**
 * @swagger
 * /clients:
 *   get:
 *     tags:
 *       - CLIENTS
 *     summary: Get all clients
 *     responses:
 *       200:
 *         description: List of clients
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
clients_router.get("/clients", getAllClientsCtrl);

/**
 * @swagger
 * /clients/{id}:
 *   get:
 *     tags:
 *       - CLIENTS
 *     summary: Get one clients
 *     responses:
 *       200:
 *         description: One clients
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
clients_router.get("/clients/:id", getOneClientsCtrl);

/**
 * @swagger
 * /clients:
 *   post:
 *     tags:
 *       - CLIENTS
 *     summary: Create clients
 *     responses:
 *       200:
 *         description: Create clients
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
clients_router.post("/clients", postClientsCtrl);

/**
 * @swagger
 * /clients/{id}:
 *   put:
 *     tags:
 *       - CLIENTS
 *     summary: Update clients
 *     responses:
 *       200:
 *         description: Update clients
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
clients_router.put("/clients/:id", updateClientsCtrl);

/**
 * @swagger
 * /clients/{id}:
 *   delete:
 *     tags:
 *       - CLIENTS
 *     summary: Delete clients
 *     responses:
 *       200:
 *         description: Delete clients
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
clients_router.delete("/clients/:id", deleteClientsCtrl);
export default clients_router;
