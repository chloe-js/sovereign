export interface Select {
    label: string | number;
    value: string | number;
}

export interface InputProps {
    label: string;
    placeholder: string;
    name: string;
}

export interface Interviewer {
    id: number;
    interviewerName: string; 
    email: string; 
    role: number;
    level: string; 
    notes: string; 
    available: string; 
}