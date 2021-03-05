import axios from "axios";

class Category {
  // TODO change Category type
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
  findOne(
    key:string,
    value:string
    ) {
    return this.category
      .post(`/category/findOne/${key}/${value}`)
      .then(({ data }: any) => data);
  }
  findByCategory({
    category
  }: {
    category: string
  }) {
    return this.category
      .post("/category/findByCategory", { category})
      .then(({ data }: any) => data);
  }

  findAll() {
    return this.category
      .get("/category/findAll",)
      .then(({ data }: any) => data);
  }

  update({
    _id,
    title,
    description,
    discount
  }: {
    _id:string,
    title: string,
    description: string,
    discount: number,
  }) {
    return this.category
      .post("/category/update", {_id, title, description, discount })
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
