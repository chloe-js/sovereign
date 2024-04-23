"use client";
import { useEffect, useState } from "react";
import Interviewers from "../components/Interviewers";
import Candidate from "../components/candidate-form";

export default function Book() {


  return (
    <>
      <Candidate></Candidate>
      <Interviewers></Interviewers>
    </>
  );
}
