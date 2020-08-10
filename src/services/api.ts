import axios from "axios";

const URL_BACKEND_TOP = window.location.hostname.includes("localhost")
  ? "http://localhost:8080"
  : "https://devportf.herokuapp.com";

const api = axios.create({
  baseURL: URL_BACKEND_TOP,
});

export default api;
