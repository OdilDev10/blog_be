import { Router } from "express";
import {
  deleteCardsCtrl,
  getAllCardsCtrl,
  getOneCardsCtrl,
  postCardsCtrl,
  updateCardsCtrl,
} from "../controllers/cards";
import {
  RoleValidClientOrUser,
  RoleValidStaff
} from "../middlewares/role_valid";
import { checkJwt } from "../middlewares/session_middleware";

const cards_router = Router();

/**
 * @swagger
 * /cards:
 *   get:
 *     tags:
 *       - CARDS
 *     summary: Get all cards
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of cards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   subscriber:
 *                     type: string
 *                   cardHolderName:
 *                     type: string
 *                   cardNumber:
 *                     type: string
 *                   code:
 *                     type: number
 *                   expiryDate:
 *                     type: string
 *                   subscriberType:
 *                     type: string
 */
cards_router.get("/cards", checkJwt, RoleValidStaff, getAllCardsCtrl);

/**
 * @swagger
 * /cards/{id}:
 *   get:
 *     tags:
 *       - CARDS
 *     summary: Get one card
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
 *         description: One card
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 subscriber:
 *                   type: string
 *                 cardHolderName:
 *                   type: string
 *                 cardNumber:
 *                   type: string
 *                 code:
 *                   type: number
 *                 expiryDate:
 *                   type: string
 *                 subscriberType:
 *                   type: string
 */
cards_router.get(
  "/cards/:id",
  checkJwt,
  getOneCardsCtrl
);

/**
 * @swagger
 * /cards:
 *   post:
 *     tags:
 *       - CARDS
 *     summary: Create a card
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subscriber:
 *                 type: string
 *               cardHolderName:
 *                 type: string
 *               cardNumber:
 *                 type: string
 *               code:
 *                 type: number
 *               expiryDate:
 *                 type: string
 *               subscriberType:
 *                 type: string
 *     responses:
 *       201:
 *         description: Card created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
cards_router.post("/cards", checkJwt, RoleValidClientOrUser, postCardsCtrl);

/**
 * @swagger
 * /cards/{id}:
 *   put:
 *     tags:
 *       - CARDS
 *     summary: Update a card
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
 *               cardHolderName:
 *                 type: string
 *               cardNumber:
 *                 type: string
 *               code:
 *                 type: number
 *               expiryDate:
 *                 type: string
 *               subscriberType:
 *                 type: string
 *     responses:
 *       200:
 *         description: Card updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
cards_router.put(
  "/cards/:id",
  checkJwt,
  RoleValidClientOrUser,
  updateCardsCtrl
);

/**
 * @swagger
 * /cards/{id}:
 *   delete:
 *     tags:
 *       - CARDS
 *     summary: Delete a card
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
 *         description: Card deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
cards_router.delete(
  "/cards/:id",
  checkJwt,
  RoleValidClientOrUser,
  deleteCardsCtrl
);

export default cards_router;
