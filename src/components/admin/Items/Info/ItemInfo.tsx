import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsDB from "../../../../lib/item";
import { ItemValues, ResponseDB } from "../../../../interfaces";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { applyDiscount } from "../../../utils/functions";

export default function ItemInfo(): ReactElement {
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
          <img src={item.img} alt={item.title} />
          <p>{item.description}</p>
          {item.discount ? (
            <>
                <p style={{ textDecoration: "line-through" }}>
                Normal Price: {item.price}€
                </p>
              <p>
                Discounted Price: {applyDiscount(item.price, item.discount)}€
              </p>
              <p>Discount:{item.discount}%</p>
            </>
          ) : (
            <>
              <p>Price: {item.price}€</p>
              <p>Discount: No</p>
            </>
          )}
          <p>Categories:</p>
          {item.tags.map((categ: string | undefined): ReactElement | null =>
            categ ? <li>{categ}</li> : null
          )}
          <Button
            variant="success"
            as={Link}
            to={`/admin/items/update/${item._id}`}
          >
            Modify
          </Button>
          <Button variant="success" as={Link} to={`/admin/items/list`}>
            Return
          </Button>
        </>
      ) : (
        <p>No item found</p>
      )}
    </div>
  );
}
