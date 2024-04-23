import { TableColumnsType } from "antd";
import { Select } from "../interfaces/constants";
import { Discipline, Level } from "../interfaces/enums";


export const disciplines: Select[]  = [
  { value: "fe", label: Discipline.FE },
  { value: "be", label: Discipline.BE },
];

export const level: Select[] = [
  { value: "junior", label: Level.JUNIOR },
  { value: "mid", label: Level.MID },
  { value: "senior", label: Level.SENIOR },
];

export const columns: TableColumnsType<any> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Level',
    dataIndex: 'level',
  },
  {
    title: 'Screen',
    dataIndex: 'screen',
  },
  {
    title: 'Main',
    dataIndex: 'main',
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
  }
];
