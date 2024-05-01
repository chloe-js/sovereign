import { Table } from "antd";
import React, { useState } from "react";
import { columns } from "../shared/util/constants";

export default function Interviewers({selected, interviewers}: any) {

  const [selectedInterviewers, setSelectedInterviewers] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedInterviewers(selectedRows as any);
      console.log('%c SI > ', 'color: mediumspringgreen; padding: 4px 8px; border: 2px solid mediumspringgreen;', selectedInterviewers);
    },
    // getCheckboxProps: (record: any) => ({
    //   disabled: record.name === 'Disabled User',
    //   name: record.name,
    // }),
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
