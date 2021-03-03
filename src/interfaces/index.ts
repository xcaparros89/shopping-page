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
    title: string;
    description: string;
    price: number;
    tags: [string?];
};