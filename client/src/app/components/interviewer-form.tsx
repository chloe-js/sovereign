"use client";
import { Button, Form } from "antd";
import LevelSelect from "../shared/components/level-select";
import NameField from "../shared/components/name-field";
import EmailField from "../shared/components/email-field";
import NotesField from "../shared/components/notes-field";
import DayAvailableSelect from "../shared/components/day-available-select";
import SoftwareRoleSelect from "../shared/components/software-role-select";
import { InterviewerSqlSubmission } from "../shared/interfaces/constants";

function InterviewerForm() {
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

  return (
    <div className="container mx-auto p-4 h-screen">
      <h2 className="py-1 px-3 rounded-md text-svn-default text-xl bg-svn-secondary inline-block mb-4 mt-12">
        Interviewer information
      </h2>
      <Form
        onFinish={onFinish}
        form={form}
        name="interviewer-form"
        className="grid grid-cols-1 gap-4 mx-auto"
      >
        {/* <div className="flex flex-col w-3/6"> */}
        <div className="grid grid-cols-12 gap-2">
          <div className="flex flex-col gap-2 col-span-6">
            <NameField
              placeholder="Interviewer name"
              label="Name"
              name="name"
            ></NameField>
            <EmailField
              placeholder="Company email"
              label="Email"
              name="email"
            ></EmailField>
          </div>
          <div className="flex flex-col gap-2 col-span-6">
            <SoftwareRoleSelect
              label="Role"
              name="role"
              placeholder="Select your role"
            ></SoftwareRoleSelect>
            <LevelSelect
              label="Level"
              name="level"
              placeholder="Select your level"
            ></LevelSelect>
          </div>
          <div className="flex flex-col gap-2 col-span-6">
            <DayAvailableSelect
              label="Day available"
              name="available"
              placeholder="Select a suitable day for interviews"
            ></DayAvailableSelect>
            <NotesField></NotesField>
          </div>
          <Button type="primary" htmlType="submit" 
          className="col-start-11 col-end-13"
          >
            Add interviewer
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default InterviewerForm;
