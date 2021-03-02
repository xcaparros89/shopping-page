import axios from "axios";

class Item {
  // TODO change item type
  item: any;
  constructor() {
    this.item = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  create({
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
    return this.item
      .post("/item/create", {title, description, price, tags })
      .then(({ data }: any) => data);
  }
  findOne({
    title
  }: {
    title: string
  }) {
    return this.item
      .post("/item/findOne", { title})
      .then(({ data }: any) => data);
  }
  findByCategory({
    category
  }: {
    category: string
  }) {
    return this.item
      .post("/item/findByCategory", { category})
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
    return this.item
      .post("/item/update", {title, description, price, tags })
      .then(({ data }: any) => data);
  }
  delete({
    title
  }: {
    title: string
  }) {
    return this.item
      .post("/item/delete", { title})
      .then(({ data }: any) => data);
  }
}

const axiosRequestFunctions = new Item();

export default axiosRequestFunctions;
