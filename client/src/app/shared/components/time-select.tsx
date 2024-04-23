"use client";
import { Form, TimePicker } from "antd";
import React, { useState } from "react";
import dayjs from "dayjs";
import { InputProps } from "../interfaces/constants";

export default function TimeSelect(props: InputProps) {
  const [time, setTime] = useState({ hour: null, minute: null });

  function setAppointmentTime(timeObj: any) {
    const { $H, $m } = timeObj;
    setTime({ hour: $H, minute: $m });
  }

  function disabledAppointmentHours() {
    return {
      disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19, 20, 21, 22, 23],
    };
  }
  return (
    <>
      <Form.Item
        label={props.label}
        colon={false}
        name={props.name}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <TimePicker
          defaultOpenValue={dayjs("13:00", "HH:mm")}
          format={"HH:mm"}
          size="large"
          style={{width: "100%"}}
          placeholder={props.placeholder}
          minuteStep={15}
          order={true}
          disabledTime={() => disabledAppointmentHours()}
          onChange={(e) => setAppointmentTime(e)}
        />
      </Form.Item>
    </>
  );
}
