"use client";
import { Button, Form } from "antd";
import LevelSelect from "../shared/components/level-select";
import NameField from "../shared/components/name-field";
import EmailField from "../shared/components/email-field";
import NotesField from "../shared/components/notes-field";
import DayAvailableSelect from "../shared/components/day-available-select";
import SoftwareRoleSelect from "../shared/components/software-role-select";
import { InterviewerSqlSubmission } from "../shared/interfaces/constants";

function InterviewerForm({onLevelChange, onRoleChange}: any) {
  const [form] = Form.useForm();

  function onFinish(data: InterviewerSqlSubmission) {
    const url = "http://localhost:8080/api/add-interviewer";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.info("Submission success:", data);
        window.location.href = data.redirectUrl;
      })
      .catch((error) => {
        console.error("Submission error:", error);
      });
  }

  function handleRoleChange(data: string) {
    console.log('ROLE CHANGE' + data)
    onRoleChange(data);
  }

  function handleLevelChange(data: string) {
    console.log('LEVEL CHANGE' + data)
    onLevelChange(data);
  }

  return (
    <div className="mx-20 my-6">
      <h2 className="py-6 text-xl">Interviewer information</h2>
      <Form
        onFinish={onFinish}
        form={form}
        name="interviewer-form"
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
          <SoftwareRoleSelect
            label="Role"
            name="role"
            placeholder="Select your role"
            event={handleRoleChange}
          ></SoftwareRoleSelect>
          <LevelSelect
            label="Level"
            name="level"
            placeholder="Select your level"
            event={handleLevelChange}
          ></LevelSelect>
          <DayAvailableSelect
            label="Day available"
            name="available"
            placeholder="Select a suitable day for interviews"
          ></DayAvailableSelect>
          <NotesField></NotesField>
          <Button type="primary" htmlType="submit">
            Add interviewer
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default InterviewerForm;
