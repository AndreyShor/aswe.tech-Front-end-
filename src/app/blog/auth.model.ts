
export interface SignupData {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegData {
  message: string;
  err?: string;
  reg: boolean;
  userData?: {
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string
  };
}

export interface LoginDataServer {
  login: boolean;
  message: string;
  userData?: {
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string
  };
}
