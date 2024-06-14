"use client";
import React, { useEffect, useState } from "react";
import { Interviews } from "../shared/interfaces/constants";
import { Button, Card, Col, Row } from "antd";
import CandidateInfoSegment from "./card-segments/candidate-info-segment";
import InterviewerInfoSegment from "./card-segments/interviewer-info-card-segment";
import EditCancelOptions from "./card-segments/edit-cancel-options-segment";

export default function InterviewsView() {
  const [interviews, setInterviews] = useState([] as Interviews[]);
  const [cardOptionsView, setCardOptionsView] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/interviews")
      .then((res) => res.json())
      .then((interviews) => {
        setInterviews(interviews);
      })
      .catch((err) => console.error("Error loading data: " + err));
  }, []);

  const noData = "Not available";

  return (
    <div className="container mx-auto p-4 ">
      <h2 className="py-1 px-3 rounded-md text-svn-default text-xl bg-svn-secondary inline-block mb-4 mt-12">Upcoming Interviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {interviews.length ? ( 
          interviews.map((item: any, index: number) => (
            <Card key={index} style={{ padding: 0 }} className="shadow-md shadow-svn-secondary-op">
              <CandidateInfoSegment data={item}></CandidateInfoSegment>
              <InterviewerInfoSegment
                data={item}
              ></InterviewerInfoSegment>
            </Card>
          ))
        ) : (
          <h2 className="h-screen">No upcoming interviews scheduled</h2>
        )}
      </div>
    </div>
  );
}
