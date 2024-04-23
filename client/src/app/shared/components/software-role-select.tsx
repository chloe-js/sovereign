import { Form, Select } from "antd";
import React, { useState } from "react";
import { roles } from "../util/constants";
import { InputProps } from "../interfaces/constants";

export default function SoftwareRoleSelect(props: InputProps) {
  const [value, setValue] = useState("");

  const update = (e: any) => {
    console.log(e);
    setValue(e);
  };

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
        onChange={(e) => update(e)}
      ></Select>
    </Form.Item>
  );
}
