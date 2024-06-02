import { Router } from "express";
import {
  deleteClientsCtrl,
  getAllClientsCtrl,
  getOneClientsCtrl,
  postClientsCtrl,
  updateClientsCtrl,
} from "../controllers/clients";
import { checkJwt } from "../middlewares/session_middleware";

const clients_router = Router();
/**
 * @swagger
 * /clients:
 *   get:
 *     tags:
 *       - CLIENTS
 *     summary: Get all clients
 *     security:
 *       - BearerAuth: []
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
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   photos:
 *                     type: array
 *                     items:
 *                       type: string
 *                   disabled:
 *                     type: boolean
 *                   deleted:
 *                     type: boolean
 *                   deletedAt:
 *                     type: string
 *                     format: date-time
 */
clients_router.get("/clients", checkJwt, getAllClientsCtrl);

/**
 * @swagger
 * /clients/{id}:
 *   get:
 *     tags:
 *       - CLIENTS
 *     summary: Get one client
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
 *         description: One client
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 photos:
 *                   type: array
 *                   items:
 *                     type: string
 *                 disabled:
 *                   type: boolean
 *                 deleted:
 *                   type: boolean
 *                 deletedAt:
 *                   type: string
 *                   format: date-time
 */
clients_router.get("/clients/:id", checkJwt, getOneClientsCtrl);

/**
 * @swagger
 * /clients:
 *   post:
 *     tags:
 *       - CLIENTS
 *     summary: Create a client
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               photos:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Client created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 photos:
 *                   type: array
 *                   items:
 *                     type: string
 *                 disabled:
 *                   type: boolean
 *                 deleted:
 *                   type: boolean
 *                 deletedAt:
 *                   type: string
 *                   format: date-time
 */
clients_router.post("/clients", checkJwt, postClientsCtrl);

/**
 * @swagger
 * /clients/{id}:
 *   put:
 *     tags:
 *       - CLIENTS
 *     summary: Update a client
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
 *               photos:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Client updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 photos:
 *                   type: array
 *                   items:
 *                     type: string
 *                 disabled:
 *                   type: boolean
 *                 deleted:
 *                   type: boolean
 *                 deletedAt:
 *                   type: string
 *                   format: date-time
 */
clients_router.put("/clients/:id", checkJwt, updateClientsCtrl);

/**
 * @swagger
 * /clients/{id}:
 *   delete:
 *     tags:
 *       - CLIENTS
 *     summary: Delete a client
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
 *         description: Client deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 photos:
 *                   type: array
 *                   items:
 *                     type: string
 *                 disabled:
 *                   type: boolean
 *                 deleted:
 *                   type: boolean
 *                 deletedAt:
 *                   type: string
 *                   format: date-time
 */
clients_router.delete("/clients/:id", checkJwt, deleteClientsCtrl);

export default clients_router;
