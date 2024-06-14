import express from 'express';
import cors from 'cors';
import { getInterviewers, postInterviewer, postInterview, getInterviews, deleteInterview } from './database.js';
import { __dirname } from './utils.js';

const router = express.Router();

router.use(cors());
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/api/interviewers", async (req, res) => {
    try {
        const interviewers = await getInterviewers();
        res.json(interviewers)
    } catch (err) {
        console.log('Attempt to get interviewers unsuccessful: ', err)
    }
})

router.get("/api/interviews", async (req, res) => {
    try {
        const interviews = await getInterviews();
        res.json(interviews)
    } catch (err) {
        console.log('Attempt to get interviews unsuccessful: ', err)
    }
})

router.post("/api/add-interviewer", async (req, res) => {
    try {
        await postInterviewer(req.body);
        const redirectUrl = 'http://localhost:3000/book';
        res.status(200).json({ redirectUrl });
    } catch (err) {
        console.log('Add interviewer request unsuccessful: ', err)
    }
})

router.post("/api/add-interview", async (req, res) => {
    try {
        await postInterview(req.body);
        const redirectUrl = 'http://localhost:3000/view';
        res.status(200).json({ redirectUrl });
    } catch (err) {
        console.log('Add Interview request unsuccessful: ', err)
    }
})

router.delete("/api/cancel-interview/:key", async (req, res) => {
    try {
        await deleteInterview(req.params.key);
        const redirectUrl = 'http://localhost:3000/view';
        res.status(200).json({ redirectUrl });
    } catch (err) {
        console.log('Interview cancel request unsuccessful: ', err)
    }
})

router.options("*", cors());

export default router;