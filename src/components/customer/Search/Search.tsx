import { ReactElement, useEffect, useState } from "react";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";
import itemsDB from "../../../lib/item";

export default function Search(): ReactElement {
  useEffect(() => {
    const fetchItems = async () => {
      const result = await itemsDB.findAll();
      if (result.success) {
        setItems(result.body);
      }
    };
    fetchItems();
  }, []);
  let [items, setItems] = useState<any>([
    { title: "", _id: "", description: "", price: "", tags: [] },
  ]);

  return (
    <div className={styles.listContainer}>
      <h1>Search</h1>
      {items.map((item: any) => (
        <Link
          to={`/info/${item._id}`}
          key={item._id}
          className={styles.itemContainer}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className={styles.itemText}>
            <p>{item.title}</p>
            {item.discount ? (
              <>
                <p style={{ textDecoration: "line-through" }}>
                  Price: {item.price}€
                </p>
                <p>New Price: {item.price}€</p>
              </>
            ) : (
              <p>Price: {item.price}€</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
