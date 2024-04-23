import express from 'express';
import { getAvailableInterviewers } from './database.js';

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());


router.get("/api/interviewers", async (req, res) => {
    const data = getAvailableInterviewers();
    const interviewers = await data;
    res.json(interviewers)
})


router.post("/api/add-interviewer", async (req, res) => {
    const data = getAvailableInterviewers();
    const interviewers = await data;
    res.json(interviewers) 
})

export default router