import { DatePicker, Form } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import React, { useState } from "react";
import { InputProps } from "../interfaces/constants";

export default function DateSelect(props: InputProps) {

  const [value, setValue] = useState("");


  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    if (current && current < dayjs().endOf("day")) {
      return true;
    }

    return current && ![2, 4].includes(dayjs(current).day());
  };


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
      <DatePicker
           onChange={(e: any) => {
            updateValue(e)
            sendValue(e)
          }}
        placeholder={props.placeholder}
        style={{width: "100%"}}
        size="large"
        disabledDate={disabledDate}
      />
    </Form.Item>
  );
}
