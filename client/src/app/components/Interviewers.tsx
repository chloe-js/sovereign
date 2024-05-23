import { Table } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { columns } from "../shared/util/constants";
import { Interviewer } from "../shared/interfaces/constants";

export default function Interviewers({ interviewers, onSelect }: any) {
  const [selectedInterviewers, setSelectedInterviewers] = useState<Interviewer[]>([]);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedInterviewers(selectedRows);
      onSelect(selectedRows); // Call the callback function
    },
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
// getCheckboxProps: (record: any) => ({
//   disabled: record.name === 'Disabled User',
//   name: record.name,
// }),