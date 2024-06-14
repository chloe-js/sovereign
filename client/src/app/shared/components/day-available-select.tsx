import { Form, Select } from "antd";
import React, { useState } from "react";
import { available, level } from "../util/constants";
import { InputProps } from "../interfaces/constants";

export default function DayAvailableSelect(props: InputProps) {
  const [value, setValue] = useState("");

  const updateValue = (value: string) => {
    setValue(value);
  };

  return (
    <Form.Item
      label={props.label}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      name={props.name}
    >
      <Select
        size="large"
        onChange={(e) => updateValue(e)}
        value={value}
        placeholder={props.placeholder}
        options={available}
      ></Select>
    </Form.Item>
  );
}
