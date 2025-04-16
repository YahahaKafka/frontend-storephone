import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "mongodb+srv://",
});
