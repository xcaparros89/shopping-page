import React, { ReactElement, useState, useEffect } from "react";
import "./SearchStyle.css";
import { Link } from "react-router-dom";
import itemsDB from "../../../lib/item";

export default function ItemsList(): ReactElement {
  useEffect(() => {
    const fetchItems = async () => {
      const result = await itemsDB.findAll();
      setItems(result.body);
    };
    fetchItems();
  }, []);
  let [items, setItems] = useState([
    { title: "", _id: "", description: "", price: "", tags: [] },
  ]);

  return (
    <>
      <div className="flowerListContainer">
        {items.map((item) => (
          <Link
            to={`/itemsList/${item._id}`}
            key={item._id}
            className="flowerContainer"
            style={{ background: "black" }}
          >
            <div className="transparent-backgroupd">
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>Price: {item.price}€</p>
              <div>
                  {item.tags && item.tags.map(tag=>(
                      <ul>{tag}</ul>
                  ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to={"/createItem"}>Create Item</Link>
    </>
  );
}
