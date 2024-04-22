import { Form, Input } from "antd";
import React from "react";
import { InputProps } from "../interfaces/constants";

export default function NameField(props: InputProps) {
  return (
    <Form.Item
      label={props.label}
      name={props.name}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <Input placeholder={props.placeholder} size="large" />
    </Form.Item>
  );
}
