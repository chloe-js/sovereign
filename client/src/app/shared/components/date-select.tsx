import { DatePicker, Form } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import React from "react";
import { InputProps } from "../interfaces/constants";

export default function DateSelect(props: InputProps) {
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Disable all days before today
    if (current && current < dayjs().endOf("day")) {
      return true;
    }

    // Disable all days except Tuesdays and Thursdays
    return current && ![2, 4].includes(dayjs(current).day());
  };
  return (
    <Form.Item
      label={props.label}
      name={props.name}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <DatePicker
        placeholder={props.placeholder}
        style={{width: "100%"}}
        size="large"
        disabledDate={disabledDate}
      />
    </Form.Item>
  );
}
