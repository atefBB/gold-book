import { Request, Response } from "express";

import pool from "../database";

export const postComment = async (request: Request, response: Response) => {

  try {
    const { comment } = request.body;
    let sql = `INSERT INTO public.comments (comment) VALUES ('${comment}') RETURNING * `
    const newComment = await pool.query(sql
    );
    response.json(newComment.rows);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: error });
  }
};

