export interface Select {
    label: string | number;
    value: string | number;
}

export interface InputProps {
    label: string;
    placeholder: string;
    name: string;
}

interface InterviewBase {
    id: number;
    interviewerName: string; 
    email: string; 
    level: string; 
    notes: string; 
    role: string;
}

export interface InterviewerSqlSubmission extends InterviewBase {
    available: number; 
}
export interface Interviewer extends InterviewBase { 
    available: string; 
}


export type InterviewFilter = Pick<Interviewer, 'available' | 'level' | 'role'>;