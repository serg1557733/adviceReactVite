import axios, { AxiosInstance } from "axios";
import { ISlip } from "./types";

const baseURL: string = "https://api.adviceslip.com/advice";

const fetchAxiosInstance: AxiosInstance = axios.create({ baseURL });

export const adviceApi = {
  getAdvice: async () => {
    const response = await fetchAxiosInstance.get<ISlip>("");
    return await response.data;
  },
};
