import axios from "axios";

let URL_BACKEND_TOP = window.location.hostname.includes("localhost")
  ? "https://devportf.herokuapp.com" /* "http://localhost:8080" */
  : "http://localhost:8080";

const api = axios.create({
  baseURL: URL_BACKEND_TOP,
});

export default api;
