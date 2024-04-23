import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { columns } from "../shared/util/constants";
import { Level, Role } from "../shared/interfaces/enums";
import { Interviewer } from "../shared/interfaces/constants";

export default function Interviewers({ receivedTime }: any) {
  function formatHour(time: any) {
    if (time.hour < 10) return `0${time.hour}`;
    return time.hour;
  }
  function formatMinute(time: any) {
    if (time.minute === 0) return `0${time.minute}`;
    return time.minute;
  }

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  const [interviewers, setInterviewers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/interviewers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const interviewers = data.map((i: any) => {
          return {
            ...i, 
            role: setRoleValue(i),
            level: setLevelValue(i),
            available: setAvailabilityValue(i),
            key: i.id
          }
        })
        setInterviewers(interviewers);
      })
      .catch((err) => console.log("Fuck me " + err));
  }, []);

  const setRoleValue = (value: Interviewer) => {
    return value.role === 1 ? Role.BE : Role.FE;
  }
  const setLevelValue = (value: Interviewer) => {
    switch (value.available) {
      case 'tuesday':
        return 'Tuesdays'
      case 'thursday':
        return 'Thursdays'
      default:
        return 'Both'
    }
  }
  const setAvailabilityValue = (value: Interviewer) => {
    switch (value.available) {
      case 'junior':
        return Level.JUNIOR
      case 'mid':
        return Level.MID
      default:
        return Level.SENIOR
    }
  }

  return (
    <div className="border-t-2 mx-20">
      <h2 className="py-6 text-xl">
        Available interviewers{" "}
        {receivedTime?.hour
          ? `for ${formatHour(receivedTime)}:${formatMinute(receivedTime)}`
          : ""}
      </h2>
      <div>
        <Table
        className="pb-10"
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={columns}
          dataSource={interviewers}
        />
      </div>
    </div>
  );
}
