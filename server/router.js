import express from 'express';
import cors from 'cors';
import { getInterviewers, postInterviewer, postInterview, getInterviews } from './database.js';
import { __dirname } from './utils.js';

const router = express.Router();

router.use(cors());
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/api/interviewers", async (req, res) => {
    const interviewers = await getInterviewers();
    res.json(interviewers)
})

router.get("/api/interviews", async (req, res) => {
    const interviews = await getInterviews();
    res.json(interviews)
})

router.post("/api/add-interviewer", async (req, res) => {
    await postInterviewer(req.body);
    const redirectUrl = 'http://localhost:3000/book';
    res.status(200).json({ redirectUrl });
})

router.post("/api/add-interview", async (req, res) => {
    await postInterview(req.body);
    const redirectUrl = 'http://localhost:3000/view';
    res.status(200).json({ redirectUrl });
})

router.options("*", cors());

export default router;