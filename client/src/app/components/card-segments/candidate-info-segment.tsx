"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { formatDate } from "@/app/shared/util/functions";

export default function CandidateInfoSegment({ data }: any) {
  return (
    <div className="p-4">
        <p className="flex justify-center py-2 font-bold">Applicant details</p>
        <div>
          <p>
            <strong>Name:</strong> {data.candidateName}
          </p>
          <p>
            <strong>Role:</strong> {data.role}
          </p>
          <p>
            <strong>Email:</strong> {data.candidateEmail}
          </p>
          <p>
            <strong>Level:</strong> {data.level}
          </p>
          <p> 
            <strong>Interview Date:</strong> {formatDate(data.interviewDate)}
          </p>
      </div>
    </div>
  );
}
