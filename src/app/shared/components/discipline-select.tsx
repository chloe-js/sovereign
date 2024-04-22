import { Form, Select } from "antd";
import React, { useState } from "react";
import { disciplines } from "../util/constants";

export default function DisciplineSelect() {
  const [value, setValue] = useState("");

  const update = (e: any) => {
    console.log(e);
    setValue(e);
  };

  return (
    <Form.Item
      label="Disciplines"
      name="disciplines"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <Select
        size="large"
        placeholder="Select discipline"
        options={disciplines}
        value={value}
        onChange={(e) => update(e)}
      ></Select>
    </Form.Item>
  );
}
