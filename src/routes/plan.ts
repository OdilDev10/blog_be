import { Router } from "express";
import {
  getAllPlansCtrl,
  getOnePlansCtrl,
  postPlansCtrl,
  updatePlansCtrl,
  deletePlansCtrl,
} from "../controllers/plan";

const plans_router = Router();

/**
 * @swagger
 * /plans:
 *   get:
 *     tags:
 *       - PLANS
 *     summary: Get all plans
 *     responses:
 *       200:
 *         description: List of plans
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
 *                   price:
 *                     type: number
 *                   duration:  # Assuming 'duration' is a property in number of days
 *                     type: number
 *                   status:  # Assuming 'status' is a property inherited from StatusModel
 *                     type: string
 */
plans_router.get("/plans", getAllPlansCtrl);

/**
 * @swagger
 * /plans/{id}:
 *   get:
 *     tags:
 *       - PLANS
 *     summary: Get one plan
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: One plan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                     type: string
 *                 description:
 *                     type: string
 *                 price:
 *                     type: number
 *                 duration:  # Assuming 'duration' is a property in number of days
 *                     type: number
 *                 status:  # Assuming 'status' is a property inherited from StatusModel
 *                     type: string
 */
plans_router.get("/plans/:id", getOnePlansCtrl);

/**
 * @swagger
 * /plans:
 *   post:
 *     tags:
 *       - PLANS
 *     summary: Create a plan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *               - duration
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               duration:  # Assuming 'duration' is a property in number of days
 *                 type: number
 */
plans_router.post("/plans", postPlansCtrl);

/**
 * @swagger
 * /plans/{id}:
 *   put:
 *     tags:
 *       - PLANS
 *     summary: Update a plan
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
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               duration:  # Assuming 'duration' is a property in number of days
 *                 type: number
 */
plans_router.put("/plans/:id", updatePlansCtrl);

/**
 * @swagger
 * /plans/{id}:
 *   delete:
 *     tags:
 *       - PLANS
 *     summary: Delete a plan
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Delete plan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */
plans_router.delete("/plans/:id", deletePlansCtrl);
export default plans_router;
