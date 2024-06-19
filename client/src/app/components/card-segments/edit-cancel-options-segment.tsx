"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { useRouter } from "next/navigation";

export default function EditCancelOptions({ data }: any) {
  
  const router = useRouter();

  function editAppointment() {
    router.push(`book/edit?id=${data.key}`)
  }

  function deleteAppointment() {
    const url = `http://localhost:8080/api/cancel-interview/${data.key}`;
    fetch(url, { method: "DELETE" })
      .then((data) => data.json())
      .then((data) => {
        console.log("Successfully cancelled appointment");
        window.location.href = data.redirectUrl;
      })
      .catch((error) => {
        console.error("Cancel appointment error:", error);
      });
  }


  return (
    <div className={`w-full flex justify-between`}>
      <Button onClick={editAppointment}>Edit</Button>
      <Button type="primary" danger onClick={deleteAppointment}>
        Cancel
      </Button>
    </div>
  );
}
