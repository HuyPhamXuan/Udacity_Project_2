import { QueryResult } from "pg";
import pool from "../database";

export type OrderType = {
    id?: Number;
    user_id?: number;
    product_id?: number;
    quantity?: number;
    order_status?: string;
};

export interface OrderDetailInterface {
    id?: Number;
    user_id?: string;
    user_name?: string;
    product_id?: string;
    name?: string;
    price?: number;
    quantity?: number;
    order_status?: string;
}

export class Orders {
    public async index(id: number): Promise<OrderDetailInterface[]> {
        try {
            const sqlQuery =
            "SELECT u.user_name, o.id, o.order_status, p.name, p.price FROM users AS u JOIN orders AS o ON u.id = o.user_id JOIN orders_products AS op ON o.id = op.order_id JOIN products AS p ON p.id = op.product_id WHERE u.id = $1";
        const con = await pool.connect();
        const result = await con.query(sqlQuery, [id]);
        con.release();
        return result.rows;
        } catch (err) {
            console.log(err)
            throw new Error("ERR: Can't get order")
        }
    }
}
