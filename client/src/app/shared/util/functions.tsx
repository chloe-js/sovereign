import { InterviewerSqlSubmission } from "../interfaces/constants";

export const setAvailabilityValue = (value: InterviewerSqlSubmission) => {
  switch (value.available) {
    case 2:
      return "Tuesdays";
    case 4:
      return "Thursdays";
    default:
      return "Both";
  }
};
