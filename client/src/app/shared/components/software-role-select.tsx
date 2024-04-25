import { Form, Select } from "antd";
import React, { useState } from "react";
import { roles } from "../util/constants";
import { InputProps } from "../interfaces/constants";

export default function SoftwareRoleSelect(props: InputProps) {
  const [value, setValue] = useState("");

  const updateValue = (value: string) => {
    console.log(value + ' from updateValue');
    setValue(value);
  };

  const sendValue = (value: string) =>{
    console.log(value + ' from sendValue');
    props.event(value);
  }

  return (
    <Form.Item
      label={props.label}
      name={props.name}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <Select
        size="large"
        placeholder={props.placeholder}
        options={roles}
        value={value}
        onChange={(e) => {
          updateValue(e)
          sendValue(e)
        }}
      ></Select>
    </Form.Item>
  );
}
