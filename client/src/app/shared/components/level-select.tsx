import { Form, Select } from "antd";
import React, { useState } from "react";
import { level } from "../util/constants";
import { InputProps } from "../interfaces/constants";

export default function LevelSelect(props: InputProps) {
  const [value, setValue] = useState("");

  const updateValue = (value: string) => {
    console.log(value);
    setValue(value);
  };

  const sendValue = (value: string) =>{
    console.log(value + ' from sendValue');
    props.event(value);
  }

  return (
    <Form.Item
      label={props.label}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      name={props.name}
    >
      <Select
        size="large"
        onChange={(e) => {
          updateValue(e)
          sendValue(e)
        }}
        value={value}
        placeholder={props.placeholder}
        options={level}
      ></Select>
    </Form.Item>
  );
}
