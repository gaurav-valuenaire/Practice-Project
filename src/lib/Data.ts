import axios from "axios";
import { IDataResponse } from "../types";

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

const fetchUserData = async () => {
  // const toastId = toast.loading("Loading...");

  try {
    const response: IDataResponse | any = await axios.get(
      `${baseUrl}/api/users`
    );
    // toast.success("Data fetched");
    // toast.dismiss(toastId);
    return response?.data?.data;
  } catch (error) {
    // toast.error("Something went wrong");
    console.log("error in fetch user data", error);
  }
  // toast.dismiss(toastId);
};

export default fetchUserData;
