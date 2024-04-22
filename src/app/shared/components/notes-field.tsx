import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function NotesField() {
  return (
    <Form.Item
      label="Notes"
      name="notes"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <TextArea rows={4} placeholder="Additional notes..." maxLength={1000} />
    </Form.Item>
  );
}
