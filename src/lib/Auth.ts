// import axios from "axios";
// import { ISignupResponse, IUserDetails } from "../types";

// const baseUrl: string = import.meta.env.VITE_REACT_APP_BASE_URL;

// export const login = async (
//   userDetails: IUserDetails,
//   setLoading: (x: boolean) => void,
//   navigate: (x: string) => void,
//   messageApi: any
// ) => {
//   setLoading(true);
//   try {
//     const response = await axios.post(`${baseUrl}/api/login`, userDetails);
//     setLoading(false);
//     const { token } = response?.data;

//     await messageApi.open({
//       type: "success",
//       content: "Logged In",
//       duration : .6
//     });

//     localStorage.setItem("token", token);
//     navigate("/data");
//   } catch (error: any) {
//     const err = error?.response?.data;
//     setLoading(false);
//     messageApi.open({
//       type: "error",
//       content: err.error,
//       duration: 0.5,
//     });
//     throw err;
//   }
// };

// export const signup = async (
//   userDetails: IUserDetails,
//   setLoading: (x: boolean) => void,
//   navigate: (x: string) => void,
//   messageApi: any
// ) => {
//   setLoading(true);
//   try {
//     const response: ISignupResponse | any = await axios.post(
//       `${baseUrl}/api/register`,
//       userDetails
//     );
//     setLoading(false);
//     const { token } = response?.data;

//     await messageApi.open({
//       type: "success",
//       content: "Signup successfull",
//       duration: 0.6,
//     });

//     localStorage.setItem("token", token);
//     navigate("/data");
//   } catch (error: any) {
//     const err = error?.response?.data;
//     setLoading(false);
//     messageApi.open({
//       type: "error",
//       content: err.error,
//       duration: 0.5,
//     });
//     throw err;
//   }
// };
