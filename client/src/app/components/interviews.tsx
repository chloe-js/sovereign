"use client";
import React, { useEffect, useState } from "react";
import { Interviews } from "../shared/interfaces/constants";
import { Card, Col, Row } from "antd";
import CandidateInfoSegment from "./card-segments/candidate-info-segment";
import InterviewerInfoSegment from "./card-segments/interviewer-info-card-segment";

export default function InterviewsView() {
  const [interviews, setInterviews] = useState([] as Interviews[]);

  useEffect(() => {
    fetch("http://localhost:8080/api/interviews")
      .then((res) => res.json())
      .then((interviews) => {
        setInterviews(interviews);
      })
      .catch((err) => console.error("Error loading SQL data: " + err));
  }, []);

  const noData = "Not available";

  return (
    <div className="container mx-auto p-4">
      <h1 className="py-6 text-xl">Candidate Interviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {interviews.length ? ( 
          interviews.map((item: any, index: number) => (
            <Card key={index} style={{ padding: 0 }} className="">
              <CandidateInfoSegment data={item}></CandidateInfoSegment>
              <InterviewerInfoSegment
                data={item.selectedPersons}
              ></InterviewerInfoSegment>
            </Card>
          ))
        ) : (
          <div>X</div>
        )}
      </div>
    </div>
  );
}
