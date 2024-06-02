import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";
import logMiddleware from "../middlewares/log_middleware";

const auth_router = Router();
/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *       - AUTH
 *     summary: Registrar
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
 *               description:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum:
 *                   - Admin
 *                   - User
 *                   - Client
 *                   - Guest
 *     responses:
 *       201:
 *         description: Registro exitoso
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
 *                 password:
 *                   type: string
 *                 description:
 *                   type: string
 *                 role:
 *                   type: string
 *                   enum:
 *                     - Admin
 *                     - User
 *                     - Client
 *                     - Guest
 */
auth_router.post("/auth/register", logMiddleware, registerCtrl);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - AUTH
 *     summary: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */
auth_router.post("/auth/login", logMiddleware, loginCtrl);

export default auth_router;
