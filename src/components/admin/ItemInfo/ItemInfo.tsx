import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsDB from "../../../lib/item";
import ItemForm from "../../forms/ItemForm";
import { idType } from "../../../interfaces";

export default function ItemInfo(): ReactElement {
  let { id } = useParams<idType>();
  useEffect(() => {
    const fetchItem = async () => {
      console.log(id);
      const result = await itemsDB.findOne("_id", id);
      console.log(result, "result");
      setItem(result.body);
    };
    fetchItem();
  }, [id]);
  let [item, setItem] = useState([
    { title: "", description: "", price: 0, tags: [] },
  ]);
  console.log(item);
  return (
    <div>
      <ItemForm initialValues={item} />
    </div>
  );
}
