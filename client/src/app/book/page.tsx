"use client";
import { useState } from "react";
import Interviewers from "../components/Interviewers";
import CandidateForm from "../components/candidate-form";

export default function Book() {
  const [roleData, setRoleData] = useState(null);
  const [levelData, setLevelData] = useState(null);


  function handleRoleChange(data: any) {
    console.log('%c DATA IN PARENT', 'color: cyan; padding: 4px 8px; border: 2px solid cyan;', data);
    setRoleData(data);
  }
  function handleLevelChange(data: any) {
    console.log('%c DATA IN PARENT', 'color: cyan; padding: 4px 8px; border: 2px solid cyan;', data);
    setLevelData(data);
  }

  return (
    <>
      <CandidateForm onRoleChange={handleRoleChange} onLevelChange={handleLevelChange}></CandidateForm>
      <Interviewers role={roleData} level={levelData}></Interviewers>
    </>
  );
}
