export interface RegisterValues {
    name: string;
    surnames: string;
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    terms: boolean;
  };
export interface LoginValues {
    username: string;
    password: string;
  }

export interface ItemValues {
    _id?: string;
    title: string;
    description: string;
    img: string;
    price: number;
    discount: number;
    tags: [string?];
};
export interface CategoryValues {
    _id?: string;
    title: string;
    description: string;
    discount: number;
};

export interface ResponseDB{
  success: boolean;
  body: any;
}

export interface UserAuth{
  userInfo: any,
  isCustomer: boolean,
  isAdmin: boolean,
}