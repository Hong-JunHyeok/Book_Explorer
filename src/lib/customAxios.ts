import axios from "axios";
import { API_KEY, SERVER_URL } from "../config/config.json";

export const customAxios = axios.create({
  baseURL: SERVER_URL,
  headers: {
    Authorization: `KakaoAK ${API_KEY}`,
  },
});
