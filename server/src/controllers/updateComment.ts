
import { Request, Response } from "express";

import pool from "../database";

export const updateComment = async (request: Request, response: Response) => {

    try {
        const { id, comment } = request.body;
        console.log(`UPDATE public.comments
	SET  comment =${comment}
            WHERE id=${id}`)
        await pool.query(
            `UPDATE public.comments
	SET  comment ='${comment}'
            WHERE id=${id}`);


        //response.json(newComment.rows[0]);

        response.status(200).send("ok");
    } catch (error) {
        console.log(error);
        return response.status(500).json({ error: error });
    }

}

