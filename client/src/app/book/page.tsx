"use client";
import { useState } from "react";
import Interviewers from "../components/Interviewers";
import Candidate from "../components/candidate-form";

export default function Book() {
  const [interviewerData, setInterviewerData] = useState(null);


  function handleInterviewerDataChange(data: any) {
    console.log('%c DATA IN PARENT', 'color: cyan; padding: 4px 8px; border: 2px solid cyan;', data);
    setInterviewerData(data);
  }

  return (
    <>
      {/* <Candidate onDataChange={handleInterviewerDataChange}></Candidate> */}
      <Interviewers></Interviewers>
    </>
  );
}
