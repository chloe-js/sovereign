import mysql from "mysql2";
import dotenv from "dotenv";
import { __dirname, path } from './utils.js';

dotenv.config({
    path: path.resolve(__dirname, './.env')
});


const pool = mysql
    .createPool({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PW,
        database: process.env.MYSQL_DB,
    })
    .promise();

export async function getAvailableInterviewers() {
    const [data] = await pool.query(
        `
        SELECT * FROM interviewers;
    `
    );
    console.log(data);
    return data;
}

export async function addInterviewer(data) {
    if(!data.notes || !data.notes.length) data.notes = 'None';

    const {
        interviewerName,
        email,
        role,
        level,
        notes,
        available
    } = data;

    await pool.query(
        `
        INSERT INTO interviewers (
            interviewerName,
            email,
            role,
            level,
            notes,
            available
        ) VALUES (?, ?, ?, ?, ?, ?)
    `,
        [
            interviewerName,
            email,
            role,
            level,
            notes,
            available
        ]
    ).catch(err => console.error('Failed to insert data into Interviewers table -> ' + err));

}
