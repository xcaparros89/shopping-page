import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsDB from "../../../lib/item";
import { ItemValues } from "../../../interfaces";

export default function Info(): ReactElement {
  let { id } = useParams<{ id: string }>();
  useEffect(() => {
    const fetchItem = async () => {
      const result = await itemsDB.findOne("_id", id);
      if (result.success) {
        setItem(result.body);
      }
    };
    fetchItem();
  }, [id]);

  let [item, setItem] = useState<ItemValues>({
    title: "",
    description: "",
    img: "",
    price: 0,
    discount: 0,
    tags: [],
  });
  return (
    <div>
      {item.title ? (
        <>
          <h1>{item.title}</h1>
          <img src={item.img} alt={item.title} />
          <p>{item.description}</p>
          {item.discount ? (
            <>
                <p style={{textDecoration:'line-through'}}>Price: {item.price}</p>
              <p>
                Price:{" "}
                {item.price - (item.price * item.discount) / 100}
              </p>
              <p>Discount:{item.discount}%</p>
            </>
          ) : (
            <p>Price: {item.price}€</p>
          )}
          <p>Categories:</p>
          {item.tags.map(categ=>
              <li>{categ}</li>
          )}
        </>
      ) : (
        <p>No item found</p>
      )}
    </div>
  );
}
