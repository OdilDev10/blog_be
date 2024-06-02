import { Router } from "express";
import {
  deletePaymentsCtrl,
  getAllPaymentsCtrl,
  getOnePaymentsCtrl,
  postPaymentsCtrl,
  updatePaymentsCtrl,
} from "../controllers/payments";
import {
  RoleValidAdmin,
  RoleValidClientOrUser,
  RoleValidStaff,
} from "../middlewares/role_valid";
import { checkJwt } from "../middlewares/session_middleware";

const payments_router = Router();

/**
 * @swagger
 * /payments:
 *   get:
 *     tags:
 *       - PAYMENTS
 *     summary: Get all payments
 *     responses:
 *       200:
 *         description: List of payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   subscription:
 *                     type: string
 *                   amount:
 *                     type: number
 *                   date:
 *                     type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *                   status:
 *                     type: string
 *                   statusEnum:  # Add an optional property for clarity
 *                       type: array
 *                       items:
 *                         type: string
 *                         enum:
 *                           - Pending
 *                           - Completed
 *                           - Failed
 */
payments_router.get("/payments", checkJwt, RoleValidStaff, getAllPaymentsCtrl);

/**
 * @swagger
 * /payments/{id}:
 *   get:
 *     tags:
 *       - PAYMENTS
 *     summary: Get one payment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: One payment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 subscription:
 *                   type: string
 *                 amount:
 *                   type: number
 *                 date:
 *                   type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *                 status:
 *                   type: string
 *                 statusEnum:  # Add an optional property for clarity
 *                       type: array
 *                       items:
 *                         type: string
 *                         enum:
 *                           - Pending
 *                           - Completed
 *                           - Failed
 */
payments_router.get(
  "/payments/:id",
  checkJwt,
  RoleValidStaff,
  getOnePaymentsCtrl
);

/**
 * @swagger
 * /payments:
 *   post:
 *     tags:
 *       - PAYMENTS
 *     summary: Create a payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - subscription
 *               - amount
 *               - date
 *               - status
 *             properties:
 *               subscription:
 *                 type: string
 *               amount:
 *                 type: number
 *               date:
 *                 type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *               status:
 *                 type: string
 *               statusEnum:  # Add an optional property for clarity
 *                       type: array
 *                       items:
 *                         type: string
 *                         enum:
 *                           - Pending
 *                           - Completed
 *                           - Failed
 */
payments_router.post(
  "/payments",
  checkJwt,
  RoleValidClientOrUser,
  postPaymentsCtrl
);

/**
 * @swagger
 * /payments/{id}:
 *   put:
 *     tags:
 *       - PAYMENTS
 *     summary: Update a payment
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
 *               subscription:
 *                 type: string
 *               amount:
 *                 type: number
 *               date:
 *                 type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *               status:
 *                 type: string
 *               statusEnum:  # Add an optional property for clarity
 *                       type: array
 *                       items:
 *                         type: string
 *                         enum:
 *                           - Pending
 *                           - Completed
 *                           - Failed
 */
payments_router.put(
  "/payments/:id",
  checkJwt,
  RoleValidClientOrUser,
  updatePaymentsCtrl
);

/**
 * @swagger
 * /payments/{id}:
 *   delete:
 *     tags:
 *       - PAYMENTS
 *     summary: Delete a payment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Delete payment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
payments_router.delete(
  "/payments/:id",
  checkJwt,
  RoleValidClientOrUser,
  deletePaymentsCtrl
);

export default payments_router;
