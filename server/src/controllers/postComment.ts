import e, { Request, Response } from "express";

import pool from "../database";

export const postComment = async (req: Request, res: Response) => {

  try {
    const { description } = req.body;
    const newComment = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING * ", [description]);


    res.json(newComment.rows[0]);

    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};   

