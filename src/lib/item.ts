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
    discount,
    img,
    tags,
  }: {
    title: string;
    description: string;
    price: number;
    discount: number;
    img: string;
    tags: [string?];
  }) {
    return this.item
      .post("/item/create", { title, description, img, price, discount, tags })
      .then(({ data }: any) => data);
  }

  findOne(key: string, value: string) {
    return this.item
      .get(`/item/findOne/${key}/${value}`)
      .then(({ data }: any) => data);
  }
  findByCategory({ category }: { category: string }) {
    return this.item
      .get("/item/findByCategory", { category })
      .then(({ data }: any) => data);
  }

  findAll() {
    return this.item.get("/item/findAll").then(({ data }: any) => data);
  }

  update({
    _id,
    title,
    description,
    img,
    price,
    discount,
    tags,
  }: {
    _id: string;
    title: string;
    description: string;
    img: string;
    price: number;
    discount: number;
    tags: [string?];
  }) {
    return this.item
      .post("/item/update", { _id, title, description, img, price, discount, tags })
      .then(({ data }: any) => data);
  }
  delete(id:string) {
    return this.item
      .get(`/item/delete/${id}`)
      .then(({ data }: any) => data);
  }
}

const axiosRequestFunctions = new Item();

export default axiosRequestFunctions;
