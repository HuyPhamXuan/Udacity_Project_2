import pool from "../database";

export type User = {
    id?: Number;
    user_name?: string;
    first_name?: string;
    last_name?: string;
    password: string;
    user_role?: string;
};

export class Users {
    async create(user: User): Promise<User> {
        try {
            const con = await pool.connect();
            const sqlQuery =
                "INSERT INTO  users (user_name, first_name, last_name, password, user_role) VALUES($1, $2, $3, $4, $5) RETURNING *";
            const data = await con.query(sqlQuery, [
                user.user_name,
                user.first_name,
                user.last_name,
                user.password,
                user.user_role,
            ]);
            const results = data.rows[0];
            con.release();
            return results;
        } catch (err) {
            throw Error(
                `ERR: Could not add new user ${user.user_name}`
            );
        }
    }

    async index(userName?: string): Promise<User> {
        try {
            const con = await pool.connect();
            const sqlQuery =
                `SELECT * FROM users WHERE user_name = ($1)`;
            const data = await con.query(sqlQuery, [userName]);
            const results: User = data.rows[0];
            return results;
        } catch (err) {
            console.log(err);
            throw new Error(`ERR: User name or password incorrect`);
        }
    }
}

