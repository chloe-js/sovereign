import express from 'express';
import cors from 'cors';
import { getInterviewers } from './database.js';
import { __dirname } from './utils.js';

const router = express.Router();

router.use(cors());
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/api/interviewers", async (req, res) => {
    const interviewers = getInterviewers();
    res.json(interviewers)
})


// router.post("/api/add-interviewer", async (req, res) => {
//     await addInterviewer(req.body)
//     const redirectUrl = 'http://localhost:3000/book';
//     res.status(200).json({ redirectUrl });
// })

router.options("*", cors());

export default router;