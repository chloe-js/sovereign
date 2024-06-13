"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";

export default function EditCancelOptions({ data }: any) {
  
  function editAppointment(){
    console.log(data)
  }
  function deleteAppointment(){
    console.log(data)
  }

  return (
    <div className={`w-full flex justify-between`}>
      <Button onClick={editAppointment}>Edit</Button>
      <Button type="primary" danger onClick={deleteAppointment}>Cancel</Button>
    </div>
  );
}
