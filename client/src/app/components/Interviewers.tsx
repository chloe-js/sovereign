import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { columns } from "../shared/util/constants";
import {
  setAvailabilityValue,
} from "../shared/util/functions";

export default function Interviewers(props: any) {
  const [interviewers, setInterviewers] = useState([] as any);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/interviewers")
      .then((res) => res.json())
      .then((data) => {
        const interviewers = data.map((i: any) => {
          return {
            ...i,
            available: setAvailabilityValue(i),
            key: i.id,
          };
        });
        setInterviewers(interviewers);
      })
      .catch((err) => console.error("Error loading SQL data: " + err));
  }, []);

  useEffect(() => {
    console.log(
      "%c ROLE ",
      "color: yellow; padding: 4px 8px; border: 2px solid yellow;",
      props.role
    );
    setSelectedRole(props.role);
  }, [props.role]);

  useEffect(() => {
    console.log(
      "%c LEVEL ",
      "color: yellow; padding: 4px 8px; border: 2px solid yellow;",
      props.level
    );
    setSelectedLevel(props.level);
  }, [props.level]);
  useEffect(() => {
    console.log(
      "%c LEVEL ",
      "color: yellow; padding: 4px 8px; border: 2px solid yellow;",
      props.day
    );
    setSelectedDay(props.day?.$d);
  }, [props.day]);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  function refresh() {
    console.log(
      "%c DATA ",
      "color: orange; padding: 4px 8px; border: 2px solid orange;",
      selectedRole,
      selectedLevel,
      selectedDay
    );

    console.log('%c INTER ', 'color: royalblue; padding: 4px 8px; border: 2px solid royalblue;', interviewers);
    const x = interviewers.filter((i: any) => i.level === 'Senior');
    console.log(x)
  }

  return (
    <div className="border-t-2 mx-20">
      <h2 className="py-6 text-xl">Available interviewers</h2>
      <h1>{props.role}</h1>
      <h1>{props.level}</h1>
      <h1>{JSON.stringify(props.day)}</h1>
      <Button onClick={refresh}>Refresh</Button>
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
