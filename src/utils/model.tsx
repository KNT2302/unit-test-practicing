export interface InformationRecord extends Information {
  id: number;
}

export interface Information {
  firstName: string;
  lastName: string;
  email: string;
}
