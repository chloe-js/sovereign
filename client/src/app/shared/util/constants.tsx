import { TableColumnsType } from "antd";
import { Select } from "../interfaces/constants";
import { Availability, Role, Level } from "../interfaces/enums";


export const roles: Select[]  = [
  { value: Role.FE, label: Role.FE },
  { value: Role.BE, label: Role.BE },
];

export const level: Select[] = [
  { value: Level.JUNIOR, label: Level.JUNIOR },
  { value: Level.MID, label: Level.MID },
  { value: Level.SENIOR, label: Level.SENIOR },
];

export const available: Select[] = [
  { value: 2, label: Availability.TU },
  { value: 4, label: Availability.TH },
  { value: 24, label: Availability.BTH },
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
