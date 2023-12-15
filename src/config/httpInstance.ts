import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

const httpInstance = axios.create({
  baseURL,
});

export default httpInstance;
