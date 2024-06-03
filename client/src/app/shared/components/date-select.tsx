import { DatePicker, Form } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import React from "react";
import { InputProps } from "../interfaces/constants";

export default function DateSelect(props: InputProps) {
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    if (current && current < dayjs().endOf("day")) {
      return true;
    }

    return current && ![2, 4].includes(dayjs(current).day());
  };

  function disabledAppointmentHours() {
    return {
      disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19, 20, 21, 22, 23],
    };
  }
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
        format="YYYY-MM-DD HH:mm"
        showTime={true}
        minuteStep={15}
        disabledTime={() => disabledAppointmentHours()}
      />
    </Form.Item>
  );
}
