
export interface SignupData {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
}

export interface RegData {
  message: string;
  err?: string;
  reg: boolean;
}
