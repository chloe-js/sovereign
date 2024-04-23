import { TableColumnsType } from "antd";
import { Select } from "../interfaces/constants";
import { Availability, Role, Level } from "../interfaces/enums";


export const roles: Select[]  = [
  { value: 0, label: Role.FE },
  { value: 1, label: Role.BE },
];

export const level: Select[] = [
  { value: "junior", label: Level.JUNIOR },
  { value: "mid", label: Level.MID },
  { value: "senior", label: Level.SENIOR },
];

export const available: Select[] = [
  { value: "tuesday", label: Availability.TU },
  { value: "thursday", label: Availability.TH },
  { value: "both", label: Availability.BTH },
];

export const columns: TableColumnsType<any> = [
  {
    title: 'Name',
    dataIndex: 'interviewerName',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Level',
    dataIndex: 'level',
  },
  {
    title: 'Role',
    dataIndex: 'role',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Avail.',
    dataIndex: 'available',
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
  }
];
