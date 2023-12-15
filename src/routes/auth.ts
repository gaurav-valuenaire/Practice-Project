import httpInstance from "../config/httpInstance";
import { IUserDetails } from "../types";

export const loginUser = (userDetails: IUserDetails) => {
  return httpInstance.post(`/api/login`, userDetails);
};

export const registerUser = (userDetails: IUserDetails) => {
  return httpInstance.post(`/api/register`, userDetails);
};
