export interface Company {
  name: string;
  department: string;
}

export interface UserResponse {
  id: number;
  avatar?: string;
  first_name: string;
  last_name: string;
  email: string;
  emailVerified: boolean;
  dob: string;
  company: Company;
  skills: string[];
}

export interface User {
  id: number;
  avatar: string | undefined;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  emailVerified: boolean;
  dob: string;
  company: Company;
  skills: string[];
}


export interface ChildrenProps {
  children: JSX.Element | Array<JSX.Element> | string;
}

export interface StackProps extends ChildrenProps {
  gap?: string;
}