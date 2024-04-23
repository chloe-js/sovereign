"use client";
import { Button, Form } from "antd";
import DisciplineSelect from "../shared/components/discipline-select";
import LevelSelect from "../shared/components/level-select";
import NameField from "../shared/components/name-field";
import EmailField from "../shared/components/email-field";
import NotesField from "../shared/components/notes-field";

function Interviewer() {
  const [form] = Form.useForm();
  function onFinish(x: any) {
    console.log(x);
  }

  return (
    <div className="mx-20 my-6">
      <h2 className="py-6 text-xl">Interviewer information</h2>
      <Form
        onFinish={onFinish}
        form={form}
        name="control-hooks"
        className="grid grid-cols-12 gap-2"
      >
        <div className="flex flex-col col-span-full">
        <NameField
          placeholder="Interviewer name"
          label="Name"
          name="interviewerName"
        ></NameField>
        <EmailField
          placeholder="Company email"
          label="Email"
          name="email"
        ></EmailField>
        <DisciplineSelect></DisciplineSelect>
        <LevelSelect></LevelSelect>
        <NotesField></NotesField>
        <Button type="primary" htmlType="submit">
          Add interviewer
        </Button>
        </div>
      </Form>
    </div>
  );
}

export default Interviewer;
