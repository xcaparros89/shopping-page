import axios from "axios";

class Auth {
  // TODO change auth type
  auth: any;
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  signup({
    username,
    email,
    password,
    address,
    name,
    surnames,
    city,
    state,
    zip
  }: {
    username: string;
    email: string;
    password: string;
    address: string;
    name: string;
    surnames: string;
    city: string;
    state: string;
    zip: string;
  }) {
    return this.auth
      .post("/auth/signup", { username, email, password, address, name, surnames, city, state, zip })
      .then(({ data }: any) => data);
  }
  login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    return this.auth
      .post("/auth/login", { username, password})
      .then(({ data }: any) => data);
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
