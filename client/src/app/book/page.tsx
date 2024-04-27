"use client";
import { useState } from "react";
import Interviewers from "../components/Interviewers";
import CandidateForm from "../components/candidate-form";

export default function Book() {
  const [roleData, setRoleData] = useState(null);
  const [levelData, setLevelData] = useState(null);
  const [dayData, setDayData] = useState(null);


  function handleRoleChange(data: any) {
    console.log('%c ROLE IN PARENT', 'color: cyan; padding: 4px 8px; border: 2px solid cyan;', data);
    setRoleData(data);
  }
  function handleLevelChange(data: any) {
    console.log('%c LEVEL IN PARENT', 'color: cyan; padding: 4px 8px; border: 2px solid cyan;', data);
    setLevelData(data);
  }
  function handleDayChange(data: any) {
    console.log('%c DAY IN PARENT', 'color: cyan; padding: 4px 8px; border: 2px solid cyan;', data);
    setDayData(data);
  }

  return (
    <>
      <CandidateForm onRoleChange={handleRoleChange} onLevelChange={handleLevelChange} onDayChange={handleDayChange}></CandidateForm>
      <Interviewers role={roleData} level={levelData} day={dayData}></Interviewers>
    </>
  );
}
