import axios from "axios";

class Category {
  // TODO change category type
  category: any;
  constructor() {
    this.category = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  create({
    title,
    description,
    discount
  }: {
    title: string,
    description: string,
    discount: number,
  }) {
    return this.category
      .post("/category/create", {title, description, discount })
      .then(({ data }: any) => data);
  }
  findOne({
    title
  }: {
    title: string
  }) {
    return this.category
      .post("/category/findOne", { title})
      .then(({ data }: any) => data);
  }
  findAll() {
    return this.category
      .get("/category/findAll",)
      .then(({ data }: any) => data);
  }
  update({
    title,
    description,
    price,
    tags
  }: {
    title: string,
    description: string,
    price: number,
    tags: [string],
  }) {
    return this.category
      .post("/category/update", {title, description, price, tags })
      .then(({ data }: any) => data);
  }
  delete({
    title
  }: {
    title: string
  }) {
    return this.category
      .post("/category/delete", { title})
      .then(({ data }: any) => data);
  }
}

const axiosRequestFunctions = new Category();

export default axiosRequestFunctions;
