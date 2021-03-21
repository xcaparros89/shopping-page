import { ReactElement, useEffect, useState } from "react";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";
import itemsDB from "../../../lib/item";
import {ItemValues} from '../../../interfaces'

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
  let [items, setItems] = useState<[ItemValues]>([
    { title: "", _id: "", description: "", img:"", price:0, discount:0, tags: [] },
  ]);

  return (
    <>
    <h1>Search</h1>
    <div className={styles.listContainer}>
      {items.map((item: ItemValues) => (
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
    </>
  );
}
