import axios from "axios";

const serverBaseURL = "http://84.46.241.5:4000";
const testBaseURL = "";

const urls = [serverBaseURL, testBaseURL];

const baseURL = urls[0];

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("dearArequipa__token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default api;
