import pool from "../database";
import { Request, Response } from "express";

export const getUserComments = async (request: Request, response: Response) => {
    const { id_user } = request.body;
    try {
        console.log("entre")
        const result = await pool.query(`SELECT comment,id FROM public.comments WHERE id_user='${id_user}'`);
        response.status(200).json(result.rows);

    } catch (error) {
        console.log(error);
        return response.status(500).json({ error: error });
    }
};
