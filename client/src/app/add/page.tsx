"use client"
import React, { useState } from "react";
import InterviewerForm from "../components/interviewer-form";

export default function Add() {

  const [roleData, setRoleData] = useState(null);
  const [levelData, setLevelData] = useState(null);

  function handleRoleChange(data: any) {
    console.log('%c ROLE IN PARENT', 'color: cyan; padding: 4px 8px; border: 2px solid cyan;', data);
    setRoleData(data)
  }
  function handleLevelChange(data: any) {
    console.log('%c LEVEL IN PARENT', 'color: cyan; padding: 4px 8px; border: 2px solid cyan;', data);
    setLevelData(data)
  }
  return (
    <>
      <InterviewerForm
        onRoleChange={handleRoleChange}
        onLevelChange={handleLevelChange}
      ></InterviewerForm>
    </>
  );
}
