import axios from "axios";

const instance = axios.create({
  //THE API {cloud funtion} URL
  baseURL: "http://localhost:5001/challenge-ba906/us-central1/api",
});

export default instance;
