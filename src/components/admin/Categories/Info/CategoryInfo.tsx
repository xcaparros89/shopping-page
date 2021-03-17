import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categoriesDB from "../../../../lib/category";
import { CategoryValues, ResponseDB } from "../../../../interfaces";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function CategoryInfo(): ReactElement {
  let { id } = useParams<{ id: string }>();
  useEffect(() => {
    const fetchCategory = async () => {
      const result: ResponseDB = await categoriesDB.findOne("_id", id);
      if (result.success) {
        setCategory(result.body);
      }
    };
    fetchCategory();
  }, [id]);

  let [category, setCategory] = useState<CategoryValues>({
    title: "",
    description: "",
    discount: 0
  });
  return (
    <div>
      {category.title ? (
        <>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
          {category.discount ? (
              <p>Discount:{category.discount}%</p>
          ) : (
              <p>Discount: No</p>
          )}
          <p>Categories:</p>
          <Button variant="success" as={Link} to={`/admin/categories/update/${category._id}`}>Modify</Button>
        </>
      ) : (
        <p>No category found</p>
      )}
      <Link to={"/admin/categories/list"}>Return</Link>
    </div>
  );
}
