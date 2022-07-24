import pool from "../database";
import { Request, Response } from "express";

export const login = async (request: Request, response: Response) => {
    const { email, password } = request.body;
    try {

        const result = await pool.query(`SELECT * FROM public.users WHERE email='${email}' and password='${password}' `);
        if (result.rowCount > 0) {
            response.json({ "error": false, "data": result.rows[0] });
        } else {
            response.json({ "error": true, "data": "there's an error !!" });
        }
    } catch (error) {
        console.log(error);
        return response.status(500).json({ error: error });
    }
};
