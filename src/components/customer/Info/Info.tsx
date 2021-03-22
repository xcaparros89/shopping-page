import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsDB from "../../../lib/item";
import { ItemValues, ResponseDB } from "../../../interfaces";
import Button from "react-bootstrap/Button";
import { applyDiscount } from "../../utils/functions";

export default function Info(): ReactElement {
  let { id } = useParams<{ id: string }>();
  useEffect(() => {
    const fetchItem = async () => {
      const result: ResponseDB = await itemsDB.findOne("_id", id);
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
          <img src={item.img} alt={item.title} style={{ width: "50%" }} />
          <p>{item.description}</p>
          {item.discount ? (
            <>
              <p style={{ textDecoration: "line-through" }}>
                Price: {item.price}€
              </p>
              <p>
                Discounted Price: {applyDiscount(item.price, item.discount)}€
              </p>
              <p>Discount:{item.discount}%</p>
            </>
          ) : (
            <p>Price: {item.price}€</p>
          )}
          <p>Categories:</p>
          {item.tags.map((categ: string | undefined): ReactElement | null =>
            categ ? <li>{categ}</li> : null
          )}
        </>
      ) : (
        <p>No item found</p>
      )}
      <Button variant="success" onClick={()=>console.log('buy')}>Buy</Button>
    </div>
  );
}
