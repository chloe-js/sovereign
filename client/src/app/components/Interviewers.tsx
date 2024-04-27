import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { columns } from "../shared/util/constants";
import { setAvailabilityValue } from "../shared/util/functions";

export default function Interviewers(props: any) {

  const [interviewers, setInterviewers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/interviewers")
      .then((res) => res.json())
      .then((data) => {
        const interviewers = data.map((i: any) => {
          return {
            ...i,
            available: setAvailabilityValue(i),
            key: i.id
          }
        })
        setInterviewers(interviewers);
      })
      .catch((err) => console.error('Error loading SQL data: ' + err));
  }, []);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };


  return (
    <div className="border-t-2">
      <h2 className="py-6 text-xl">
        Available interviewers
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
