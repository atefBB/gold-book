//Register 
import { Request, Response } from "express";
import pool from "../database";

export const verifyEmail = async (email: string) => {

    try {

        const result = await pool.query(`SELECT email FROM public.users WHERE email='${email}' `);
        if (result.rowCount > 0) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error);

    }
};
export const postUser = async (request: Request, response: Response) => {
    try {

        const { username, email, password, role } = request.body;
        if (await verifyEmail(email) === false) {
            let sql = `INSERT INTO public.users (username ,email, password,role) VALUES ('${username}','${email}','${password}', '${role}' ) RETURNING * `
            const newUser = await pool.query(sql)
            if (newUser.rowCount > 0) {
                response.json({ "error": false, "data": newUser.rows });
            } else {
                response.json({ "error": true, "data": "there's an error !!" });
            }
        }
        else {
            response.json({ "error": true, "data": "email exist !!" });
        }

    } catch (error) {
        console.error(error);
    }
};