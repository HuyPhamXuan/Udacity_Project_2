import { QueryResult } from "pg";
import pool from "../database";

export type Product = {
    id?: Number;
    name?: string;
    price?: number;
};

export interface ProductCategory {
    id?: Number;
    name?: string;
    price?: number;
    category?: string
};

export class Products {
    async index(): Promise<Product[]> {
        const conn = await pool.connect();
        const sql = "SELECT * FROM products";
        const result = await conn.query(sql);
        conn.release();
        return result.rows;
    }

    async show(id: string): Promise<Product> {
        try {
            const sqlQuery = "SELECT * FROM products WHERE id=($1)";
            const con = await pool.connect();
            const result = await con.query(sqlQuery, [id]);

            con.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`ERR: Could not find product ${id}.`);
        }
    }

    async showByCategory(category: string): Promise<ProductCategory[]> {
        try {
            const sqlQuery =
                "SELECT p.id, p.name, p.price, c.name AS category FROM products as p LEFT JOIN products_categories AS pc ON p.id = pc.product_id LEFT JOIN categories AS c ON c.id = pc.category_id WHERE c.name=($1)";
            const con = await pool.connect();
            const results: QueryResult<ProductCategory> = await con.query(sqlQuery, [category]);

            con.release();
            return results.rows;
        } catch (err) {
            throw new Error(`ERR: Could not find product by ${category} category`);
        }
    }

    async create(p: Product): Promise<Product> {
        try {
            const sqlQuery =
                "INSERT INTO  products (name, price) VALUES($1, $2) RETURNING *";
            const con = await pool.connect();
            const results = await con.query(sqlQuery, [p.name, 220.5]);
            const product = results.rows[0];

            con.release();
            return product;
        } catch (err) {
            throw new Error(`ERR: Could not add new product ${p.name}.`);
        }
    }

    async update(p: Product, id: number): Promise<Product> {
        try {
            const sqlQuery =
                "UPDATE products SET name = $1, price = $2 WHERE id = $3";
            const con = await pool.connect();
            const results = await con.query(sqlQuery, [p.name, p.price, id]);
            const product = results.rows[0];

            con.release();
            return product;
        } catch (err) {
            throw new Error(`ERR: Could not add new book ${p.name}. Error: ${err}`);
        }
    }

    async delete(id: string): Promise<Product> {
        try {
            const sqlQuery = "DELETE FROM product WHERE id=($1)";
            const con = await pool.connect();
            const result = await con.query(sqlQuery, [id]);
            const product = result.rows[0];
            
            con.release();
            return product;
        } catch (err) {
            throw new Error(`ERR: Could not delete book ${id}. Error: ${err}`);
        }
    }
}
