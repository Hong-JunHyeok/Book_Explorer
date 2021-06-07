import axios from "axios";
import { API_KEY } from "../config/config.json";

export const customAxios = axios.create({
  headers: {
    Authorization: `KakaoAK ${API_KEY}`,
  },
});
