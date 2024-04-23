import { Form, Select } from "antd";
import React, { useState } from "react";
import { level } from "../util/constants";

export default function LevelSelect() {
  const [value, setValue] = useState("");

  const update = (e: any) => {
    console.log(e);
    setValue(e);
  };

  return (
    <Form.Item
      label="Level"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      name="level"
    >
      <Select
        size="large"
        onChange={(e) => update(e)}
        value={value}
        placeholder="Select a level"
        options={level}
      ></Select>
    </Form.Item>
  );
}
