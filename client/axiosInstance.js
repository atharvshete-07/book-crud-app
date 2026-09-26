import axios from "axios";

export const bookBaseUrl = axios.create({
  baseURL: "http://localhost:3003/book",
});  