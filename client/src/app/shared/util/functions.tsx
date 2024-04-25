import { Interviewer, InterviewerSqlSubmission } from "../interfaces/constants";
import { Level, Role } from "../interfaces/enums";

export const setRoleValue = (value: InterviewerSqlSubmission) => {
  return value.role === 1 ? Role.BE : Role.FE;
};

export const setAvailabilityValue = (value: Interviewer) => {
  switch (value.available) {
    case "tuesday":
      return "Tuesdays";
    case "thursday":
      return "Thursdays";
    default:
      return "Both";
  }
};
export const setLevelValue = (value: Interviewer) => {
  switch (value.level) {
    case "junior":
      return Level.JUNIOR;
    case "mid":
      return Level.MID;
    default:
      return Level.SENIOR;
  }
};
