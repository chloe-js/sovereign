import { Table } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { columns } from "../shared/util/constants";
import { Interviewer } from "../shared/interfaces/constants";

export default function Interviewers({ interviewers, onSelect }: any) {
  const [selectedInterviewers, setSelectedInterviewers] = useState<
    Interviewer[]
  >([]);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      setSelectedInterviewers(selectedRows);
      onSelect(selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  return (
    <div className="border-t-2">
      <h2 className="py-1 px-3 rounded-md text-svn-default text-xl bg-svn-secondary inline-block mt-2 mb-4">Available interviewers</h2>
      <div>
        <Table
          className="pb-10"
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={interviewers}
        />  
      </div>
    </div>
  );
}
