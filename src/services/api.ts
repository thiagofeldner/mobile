import axios from "axios"

export const api = axios.create({
  baseURL: "http://192.168.0.28:3333",
  timeout: 700,
})
