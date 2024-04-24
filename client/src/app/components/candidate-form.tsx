"use client";
import { Button, Form } from "antd";
import DateSelect from "../shared/components/date-select";
import LevelSelect from "../shared/components/level-select";
import NameField from "../shared/components/name-field";
import TimeSelect from "../shared/components/time-select";
import SoftwareRoleSelect from "../shared/components/software-role-select";

function Candidate() {
  const [form] = Form.useForm();

  function onFinish(form: any) {
    console.log(form);
  }

  function updateVals(){

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
            
          ></SoftwareRoleSelect>
          <LevelSelect
            placeholder="Select position level"
            label="Level"
            name="level"
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

export default Candidate;
