import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsDB from "../../../lib/item";
import ItemForm from "../../forms/ItemForm";
import { ItemValues} from "../../../interfaces";


export default function ItemInfo(): ReactElement {
  let { id } = useParams<{id:string}>();
  useEffect(() => {
    const fetchItem = async () => {
      const result = await itemsDB.findOne("_id", id);
      if(result.success){
        setItem(result.body);
      }
    };
    fetchItem();
  }, [id]);
  let [item, setItem] = useState<ItemValues>(
    { title: "", description: "", img:"", price: 0, discount:0, tags: [] },
  );
  console.log(item);
  return (
    <div>
      <ItemForm initialValues={item} />
    </div>
  );
}
