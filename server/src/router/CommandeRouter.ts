import express from "express";
import { postComment } from "../controllers/postComment";
import { getComments } from "../controllers/getComments";
import { deleteComment } from "../controllers/deleteComment";
import { updateComment } from "../controllers/updateComment";
import { postUser } from "../controllers/postUser";
import { login } from "../controllers/login";
import { getUserComments } from "../controllers/getUserComment";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The books managing API
 */

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: get comments
 *     tags: [User]
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/comments").get(getComments);

/**
 * @swagger
 * /user_comments:
 *   post:
 *     summary: get user comments
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_user:
 *                type: string
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/user_comments").post(getUserComments);

/**
 * @swagger
 * /deleteComment:
 *   delete:
 *     summary: Delete comment
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       409:
 *         description: conflict
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/deleteComment").delete(deleteComment);


/**
 * @swagger
 * /add_comment:
 *   post:
 *     summary: add Comment
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *               id_user:
 *                 type: string
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/add_comment").post(postComment);
/**
 * @swagger
 * /update_comment:
 *   put:
 *     summary: update Comment
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               comment:
 *                 type: string
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */

router.route("/update_comment").put(updateComment);

/**
 * @swagger
 * /register:
 *   post:
 *     summary: add user
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/register").post(postUser);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: get user
 *     tags: [User]
 *     requestBody:
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
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/login").post(login);

export default router;