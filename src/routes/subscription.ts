import { Router } from "express";
import {
  getAllSubscriptionsCtrl,
  getOneSubscriptionsCtrl,
  postSubscriptionsCtrl,
  updateSubscriptionsCtrl,
  deleteSubscriptionsCtrl,
} from "../controllers/subscription";

const subscriptions_router = Router();
/**
 * @swagger
 * /subscriptions:
 *   get:
 *     tags:
 *       - SUBSCRIPTIONS
 *     summary: Get all subscriptions
 *     responses:
 *       200:
 *         description: List of subscriptions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   plan:
 *                     type: string
 *                   subscriber:
 *                     type: string
 *                   subscriberType:
 *                     type: string
 *                     enum:
 *                       - User
 *                       - Client
 *                   blog:
 *                     type: string
 *                   startDate:
 *                     type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *                   endDate:
 *                     type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *                   active:
 *                     type: boolean
 *                   status:  # Assuming 'status' is a property inherited from StatusModel
 *                     type: string
 */
subscriptions_router.get("/subscriptions", getAllSubscriptionsCtrl);

/**
 * @swagger
 * /subscriptions/{id}:
 *   get:
 *     tags:
 *       - SUBSCRIPTIONS
 *     summary: Get one subscription
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: One subscription
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                     type: string
 *                 plan:
 *                     type: string
 *                 subscriber:
 *                     type: string
 *                 subscriberType:
 *                     type: string
 *                     enum:
 *                       - User
 *                       - Client
 *                 blog:
 *                     type: string
 *                 startDate:
 *                     type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *                 endDate:
 *                     type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *                 active:
 *                     type: boolean
 *                 status:  # Assuming 'status' is a property inherited from StatusModel
 *                     type: string
 */
subscriptions_router.get("/subscriptions/:id", getOneSubscriptionsCtrl);

/**
 * @swagger
 * /subscriptions:
 *   post:
 *     tags:
 *       - SUBSCRIPTIONS
 *     summary: Create a subscription
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - plan
 *               - subscriber
 *               - subscriberType
 *               - blog  # Assuming 'blog' is the ObjectId of the blog owner
 *               - startDate
 *               - endDate
 *             properties:
 *               plan:
 *                 type: string
 *               subscriber:
 *                 type: string
 *               subscriberType:
 *                 type: string
 *                 enum:
 *                   - User
 *                   - Client
 *               blog:
 *                 type: string
 *               startDate:
 *                 type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *               endDate:
 *                 type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *               active:
 *                 type: boolean
 */
subscriptions_router.post("/subscriptions", postSubscriptionsCtrl);

/**
 * @swagger
 * /subscriptions/{id}:
 *   put:
 *     tags:
 *       - SUBSCRIPTIONS
 *     summary: Update a subscription
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
 *               plan:
 *                 type: string
 *               subscriber:
 *                 type: string
 *               subscriberType:
 *                 type: string
 *                 enum:
 *                   - User
 *                   - Client
 *               blog:
 *                 type: string
 *               startDate:
 *                 type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *               endDate:
 *                 type: string  # Date should be formatted according to the desired standard (e.g., ISO 8601)
 *               active:
 *                 type: boolean
 */
subscriptions_router.put("/subscriptions/:id", updateSubscriptionsCtrl);

/**
 * @swagger
 * /subscriptions/{id}:
 *   delete:
 *     tags:
 *       - SUBSCRIPTIONS
 *     summary: Delete a subscription
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Delete subscription
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
subscriptions_router.delete("/subscriptions/:id", deleteSubscriptionsCtrl);

export default subscriptions_router;
