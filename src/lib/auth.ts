import axios from "axios";
import dotenv from "dotenv";

class Auth {
    // TODO change auth type
    auth:any;
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  signup({username, email, password, adress}:{  username: String,
    email: String,
    password: String,
    adress: String,}) {
    return this.auth
      .post("/auth/signup", {username, email, password, adress})
      .then(({ data }:any) => data);
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;