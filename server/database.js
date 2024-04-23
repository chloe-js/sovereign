import mysql from "mysql2";
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

// export async function createResolution(data) {
//   const {
//     titleOne,
//     bodyOne,
//     titleTwo,
//     bodyTwo,
//     titleThree,
//     bodyThree,
//     email,
//     code,
//     username,
//     resolutionEnd
//   } = data;

//   await pool.query(
//     `
//         INSERT INTO resolution (titleOne, bodyOne, titleTwo, bodyTwo, titleThree, bodyThree, email, code, username, resolutionEnd)
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `,
//     [
//       titleOne,
//       bodyOne,
//       titleTwo,
//       bodyTwo,
//       titleThree,
//       bodyThree,
//       email,
//       code,
//       username,
//       resolutionEnd
//     ]
//   );
// }
