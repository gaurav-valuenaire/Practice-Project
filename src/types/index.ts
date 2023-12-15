export interface IUserDetails {
  email: string;
  password: string;
}

export interface ISignupResponse {
  id: number;
  token: string;
}

export interface ILoginReponse {
  token: string;
}

interface IData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IDataResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IData[];
  support: {
    url: string;
    text: string;
  };
}

export interface ISignUpData {
  firstName : string,
  lastName : string,
  email : string,
  password : string
}