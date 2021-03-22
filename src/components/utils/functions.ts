import { ItemValues } from "../../interfaces";

export function shuffle(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export let filteredArray = (type: string, array: [ItemValues]) => {
  let newArray;
  switch (type) {
    case "all":
      newArray = array;
      break;
    case "discount":
      newArray = array.filter((item) => {
        console.log(item, "item");
        return item.discount;
      });
      break;
    default:
      return { success: false, body: "Filter not found" };
  }
  shuffle(newArray);
  return { success: true, body: newArray };
};

export let applyDiscount = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};
