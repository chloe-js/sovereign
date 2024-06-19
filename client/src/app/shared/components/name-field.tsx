"use client"
import { Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { InputProps } from "../interfaces/constants";

export default function NameField(props: InputProps) {

  const [init, setInit] = useState('')

  useEffect(() => {
    setInit(props.initialValue)
  }, [props.initialValue])
  
  console.log(init)
  return (
    <Form.Item
      label={props.label}
      name={props.name}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValue={init}
    >
      <Input placeholder={props.placeholder} size="large" />
    </Form.Item>
  );
}
