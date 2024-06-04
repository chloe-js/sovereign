"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";

export default function InterviewerInfoSegment({ data }: any) {
  return (
    <div className="bg-green-100 p-4 h-full rounded-b-lg">
      <p className="flex justify-center py-2 font-bold">Interviewers details</p>

        { data.map( (item: any, index: any) => ( 
      <div className="py-3" key={index}>
        <p>
          <strong>Name:</strong> {item.name}
        </p>
        <p>
          <strong>Role:</strong> {item.role}
        </p>
        <p>
          <strong>Email:</strong> {item.email}
        </p>
        <p>
          <strong>Level:</strong> {item.level}
        </p>
      </div>
) )}

    </div>
  );
}
