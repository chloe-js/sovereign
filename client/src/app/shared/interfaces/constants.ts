export interface Select {
    label: string | number;
    value: string | number;
}

export interface InputProps {
    label: string;
    placeholder: string;
    name: string;
    event?: any;
}

interface InterviewBase {
    id: number;
    interviewerName: string; 
    email: string; 
    level: string; 
    notes: string; 
    available: string; 
}

export interface InterviewerSqlSubmission extends InterviewBase {
    role: number;
}
export interface Interviewer extends InterviewBase { 
    role: string;
}