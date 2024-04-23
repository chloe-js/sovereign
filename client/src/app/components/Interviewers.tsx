import { Table } from "antd";
import React from "react";
import { columns } from "../shared/util/constants";
import { Level } from "../shared/interfaces/enums";

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

  const data: any[] = [
    {
      key: '1',
      name: 'John Brown',
      level: Level.MID,
      main: '--'
    },
    {
      key: '2',
      name: 'Jim Green',
      level: Level.JUNIOR,
      main: '--'
    },
    {
      key: '3',
      name: 'Joe Black',
      level: Level.SENIOR,
      main: '--'
    },
    {
      key: '4',
      name: 'Disabled User',
      level: Level.SENIOR,
      main: '--'
    },
  ];

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
          dataSource={data}
        />
      </div>
    </div>
  );
}
