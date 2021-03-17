import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsDB from "../../../lib/item";
import ItemForm from "../../forms/ItemForm";
import {ResponseDB} from "../../../interfaces";


export default function ItemInfo(): ReactElement {
  let { id } = useParams<{id:string}>();
  let [responseDB, setResponseDB] = useState<ResponseDB>({success:false, body:''});
  useEffect(() => {
    const fetchItem = async () => {
      const result:ResponseDB = await itemsDB.findOne("_id", id);
      setResponseDB(result);
    };
    fetchItem();
  }, [id]);
  return (
    <div>
      {responseDB.success? 
      <ItemForm initialValues={responseDB.body} />
      : <p>Error, item not found</p>
    }
    </div>
  );
}
