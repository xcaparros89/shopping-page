import { ReactElement, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import itemsDB from "../../../lib/item";
import { ItemValues, ResponseDB } from "../../../interfaces";
import { filteredArray, applyDiscount } from "../../utils/functions";
import styles from "./Slideshow.module.css";

export default function Slideshow({ type }: { type: string }): ReactElement {
  useEffect(() => {
    const fetchItems = async () => {
      const result = await itemsDB.findAll();
      if (result.success) {
        let filteredItems: ResponseDB = filteredArray(type, result.body);
        if (filteredItems.success) {
          setItems(filteredItems.body);
        } else {
          console.log("Error: " + filteredItems);
        }
      }
    };
    fetchItems();
  }, []);

  let [items, setItems] = useState<[ItemValues]>([
    {
      title: "",
      _id: "",
      description: "",
      img: "",
      price: 0,
      discount: 0,
      tags: [],
    },
  ]);

  return (
    <div className={styles.container}>
      <Carousel>
        {items.map(
          (item: ItemValues): ReactElement => (
            <Carousel.Item key={item._id}>
              <Image
                className="d-block w-100 "
                src={item.img}
                alt={item.title}
              />
              <Carousel.Caption>
                <Link to={`/info/${item._id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <p style={{ textDecoration: "line-through" }}>
                  Price: {item.price}€
                </p>
                <p>
                  Discounted Price: {applyDiscount(item.price, item.discount)}€
                </p>
                <p>Discount: {item.discount}%</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        )}
      </Carousel>
    </div>
  );
}
