"use client";
import { Button, Form } from "antd";
import DateSelect from "../shared/components/date-select";
import LevelSelect from "../shared/components/level-select";
import NameField from "../shared/components/name-field";
import TimeSelect from "../shared/components/time-select";
import SoftwareRoleSelect from "../shared/components/software-role-select";

function CandidateForm({ onRoleChange, onLevelChange, onDayChange }: any) {
  const [form] = Form.useForm();

  function onFinish(form: any) {
    console.log(form);
  }

  function handleRoleChange(data: string) {
    console.log('ROLE CHANGE' + data)
    onRoleChange(data);
  }

  function handleLevelChange(data: string) {
    console.log('LEVEL CHANGE' + data)
    onLevelChange(data);
  }
  function handleDayChange(data: string) {
    console.log('LEVEL CHANGE' + data)
    onDayChange(data);
  }

  return (
    <div className="mx-20 my-6">
      <h2 className="py-6 text-xl">Candidate information</h2>
      <Form
        onFinish={onFinish}
        form={form}
        name="booking-form"
        className="grid grid-cols-12 gap-2"
      >
        <div className="flex flex-col gap-2 col-span-6">
          <SoftwareRoleSelect
            placeholder="Select positions role"
            label="Role"
            name="role"
            event={handleRoleChange}
          ></SoftwareRoleSelect>
          <LevelSelect
            placeholder="Select position level"
            label="Level"
            name="level"
            event={handleLevelChange}
          ></LevelSelect>
        </div>
        <div className="flex flex-col gap-2 col-span-6">
          <NameField
            placeholder="Candidates name"
            name="candidateName"
            label="Candidate"
          ></NameField>
          <div>
            <DateSelect
              placeholder="Select interview date"
              name="interviewDate"
              label="Interview date"
              event={handleDayChange}
            ></DateSelect>
            <TimeSelect
              placeholder="Select interview time"
              name="interviewTime"
              label="Interview time"
            ></TimeSelect>
          </div>
        </div>
        <Button type="primary" htmlType="submit" className="col-start-11 col-end-13">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CandidateForm;
