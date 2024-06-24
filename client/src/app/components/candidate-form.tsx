"use client";
import { Button, Form } from "antd";
import DateSelect from "../shared/components/date-select";
import LevelSelect from "../shared/components/level-select";
import NameField from "../shared/components/name-field";
import SoftwareRoleSelect from "../shared/components/software-role-select";
import Interviewers from "./Interviewers";
import {
  availableInterviewerFilter,
  setAvailabilityValue,
  stringToDayJsObject,
} from "../shared/util/functions";
import { useEffect, useState } from "react";
import { Interviewer } from "../shared/interfaces/constants";
import EmailField from "../shared/components/email-field";
import { useSearchParams } from "next/navigation";

function CandidateForm(props: any) {
  const [form] = Form.useForm();

  const [interviewersFilter, setInterviewersFilter] = useState([]);
  const [interviewers, setInterviewers] = useState([]);
  const [selected, setSelectedInterviewers] = useState([]);

  type FormReference = {
    [key: string]: string;
  };

  const params = useSearchParams();
  const id = params.get("id");
  useEffect(() => {
    fetch("http://localhost:8080/api/interviewers")
      .then((res) => res.json())
      .then((data) => {
        const interviewers = data.map((interviewer: any) => {
          return {
            ...interviewer,
            available: setAvailabilityValue(interviewer.available),
          };
        });
        setInterviewers(interviewers);
        setInterviewersFilter(interviewers);
      })
      .catch((err) => console.error("Error loading data: " + err));
  }, []);

  useEffect(() => {
    if (id) {
      try {
        const fetchFormData = async () => {
          const data = await fetch(
            `http://localhost:8080/api/interviews/${id}`
          );
          const res = await data.json();
          const interviewData = res.filter(
            (appointment: any) => appointment.key === id
          );
          console.log(interviewData)
          form.setFieldsValue({
            candidateName: interviewData[0].candidateName,
            candidateEmail: interviewData[0].candidateEmail,
            role: interviewData[0].role,
            level: interviewData[0].level,
            interviewDate: stringToDayJsObject(interviewData[0].interviewDate)
          });
          stringToDayJsObject(interviewData[0].interviewDate)
        };
        fetchFormData();
      } catch (err) {
        console.error("Issue fetching form data");
      }
    }
  });

  function onFinish(form: any) {
    form.selectedPersons = selected;
    const url = "http://localhost:8080/api/add-interview";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(form),
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

  function filterAvailableInterviewers(ref: FormReference) {
    if (Object.keys(ref).includes("candidateName")) return;
    const role = form.getFieldValue("role") ?? null;
    const level = form.getFieldValue("level") ?? null;
    let available = "";
    if (form.getFieldValue("interviewDate")) {
      const { $W } = form.getFieldValue("interviewDate") ?? null;
      available = $W ? setAvailabilityValue($W) : "";
    }

    const filteredInterviewers = interviewers.filter((i: Interviewer) => {
      return availableInterviewerFilter({ role, level, available }, i);
    });
    setInterviewersFilter(filteredInterviewers);
  }

  function handleSelectInterviewers(selected: any) {
    setSelectedInterviewers(selected);
  }

  return (
    <div className="mx-20 my-6">
      <h2 className="py-1 px-3 rounded-md text-white text-xl bg-svn-secondary inline-block mt-12 mb-4">
        Candidate information
      </h2>
      <Form
        onFinish={onFinish}
        form={form}
        name="booking-form"
        onValuesChange={(ref: FormReference) =>
          filterAvailableInterviewers(ref)
        }
      >
        <div className="grid grid-cols-12 gap-2">
          <div className="flex flex-col gap-2 col-span-6">
            <NameField
              placeholder="Candidates name"
              name="candidateName"
              label="Candidate"
            ></NameField>
            <EmailField
              label="Email"
              name="candidateEmail"
              placeholder="Candidates email"
            ></EmailField>
            <SoftwareRoleSelect
              placeholder="Select positions role"
              label="Role"
              name="role"
            ></SoftwareRoleSelect>
          </div>
          <div className="flex flex-col gap-2 col-span-6">
            <DateSelect
              placeholder="Select interview date"
              name="interviewDate"
              label="Interview date & time"
            ></DateSelect>
            <LevelSelect
              placeholder="Select position level"
              label="Level"
              name="level"
            ></LevelSelect>
          </div>
        </div>
        <Interviewers
          interviewers={interviewersFilter}
          onSelect={handleSelectInterviewers}
        ></Interviewers>
        <Button
          type="primary"
          htmlType="submit"
          className="col-start-11 col-end-13"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CandidateForm;
