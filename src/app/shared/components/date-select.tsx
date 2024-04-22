import { DatePicker, Form } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import React from "react";

export default function DateSelect() {
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Disable all days before today
    if (current && current < dayjs().endOf('day')) {
      return true;
    }

    // Disable all days except Tuesdays and Thursdays
    return current && ![2, 4].includes(dayjs(current).day());
  };
  return (
    <Form.Item
      label="Date"
      name="date"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <DatePicker size="large" disabledDate={disabledDate} />
    </Form.Item>
  );
}
