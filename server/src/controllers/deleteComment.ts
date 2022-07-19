import pool from "../database";
import { Request, Response } from "express";

export const deleteComment = async (request: Request, response: Response) => {
  const { id } = request.body;

  try {
    const result = await pool.query(
      `DELETE  FROM comments WHERE id='${id}' returning id`
    );
    response.json(result.rows);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: error });
  }
};
