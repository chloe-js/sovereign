"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import EditCancelOptions from "./edit-cancel-options-segment";

export default function InterviewerInfoSegment({ data }: any) {
  return (
    <div className="bg-green-100 p-4 h-full rounded-b-lg ">
      <div>
        <p className="flex justify-center text-svn-primary py-2 font-bold">
          Interviewers details
        </p>

        {data.selectedPersons.map((item: any, index: any) => (
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
        ))}
      </div>
      <EditCancelOptions data={data}></EditCancelOptions>
    </div>
  );
}
