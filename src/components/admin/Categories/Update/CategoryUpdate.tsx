import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categoriesDB from "../../../../lib/category";
import CategoryForm from "../../../forms/CategoryForm";
import {ResponseDB} from "../../../../interfaces";
import { Link } from "react-router-dom";

export default function CategoryInfo(): ReactElement {
  let { id } = useParams<{id:string}>();
  let [responseDB, setResponseDB] = useState<ResponseDB>({success:false, body:''});
  useEffect(() => {
    const fetchCategory = async () => {
      const result:ResponseDB = await categoriesDB.findOne("_id", id);
      setResponseDB(result);
    };
    fetchCategory();
  }, [id]);
  return (
    <div>
      {responseDB.success? 
      <CategoryForm initialValues={responseDB.body} />
      : <p>Error, category not found</p>
    }
    <Link to={"/admin/categories/list"}>Return</Link>
    </div>
  );
}
