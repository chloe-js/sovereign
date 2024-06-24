import dayjs from "dayjs";
import { InterviewFilter, Interviewer } from "../interfaces/constants";
import { Availability } from "../interfaces/enums";
import customParseFormat from 'dayjs/plugin/customParseFormat';

export const setAvailabilityValue = (value: number) => {
  switch (value) {
    case 2:
      return "Tuesdays";
    case 4:
      return "Thursdays";
    default:
      return "Both";
  }
};

export function availableInterviewerFilter({role, level, available}: InterviewFilter, i: Interviewer){
  const isAvailable = i.available === available || i.available === Availability._BTH;
  if (!role && !level && !available) return;
  if (role && level && available) {
    return i.level === level && i.role === role && isAvailable;
  }
  if (role && level) {
    return i.level === level && i.role === role;
  }
  if (role && available) {
    return isAvailable && i.role === role;
  }
  if (level && available) {
    return i.level === level && isAvailable;
  }
  if (role) {
    return i.role === role;
  }
  if (level) {
    return i.level === level;
  }
  if (available) {
    return isAvailable;
  }
}


export const formatDate = (isoString: any) => {
  const date = new Date(isoString);

  // Format the date
  const formattedDate = date.toLocaleDateString('en-US');

  return formattedDate;
};

export const stringToDayJsObject = (str: string) => {
  dayjs.extend(customParseFormat)
  return dayjs(str)
}