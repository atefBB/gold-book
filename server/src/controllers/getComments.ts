import pool from "../database";
import { Request, Response } from "express";

export const getComments = async (request: Request, response: Response) => {

  try {
    console.log("entre")
    const result = await pool.query("SELECT * FROM public.comments");
    response.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: error });
  }
};
