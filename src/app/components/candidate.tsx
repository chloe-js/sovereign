"use client";
import { Button, Form } from "antd";
import DateSelect from "../shared/components/date-select";
import DisciplineSelect from "../shared/components/discipline-select";
import LevelSelect from "../shared/components/level-select";
import NameField from "../shared/components/name-field";
import TimeSelect from "../shared/components/time-select";

function Candidate() {
  const [form] = Form.useForm();
  function onFinish(x: any) {
    console.log(x);
  }

  return (
    <div className="mx-20 my-6">
      <h2 className="py-6 text-xl">Candidate information</h2>
      <Form
        onFinish={onFinish}
        form={form}
        name="control-hooks"
        className="grid grid-cols-12 gap-2"
      >
        <div className="flex flex-col gap-2 col-span-6">
          <DisciplineSelect></DisciplineSelect>
          <LevelSelect></LevelSelect>
        </div>
        <div className="flex flex-col gap-2 col-span-6">
          <NameField
            placeholder="Candidates name"
            name="candidateName"
            label="Candidate"
          ></NameField>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DateSelect></DateSelect>
            <TimeSelect></TimeSelect>
          </div>
        </div>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Candidate;
