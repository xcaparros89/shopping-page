import { ReactElement, useState, useEffect, useContext } from "react";
import styles from "./CategoriesList.module.css";
import { Link } from "react-router-dom";
import categoriesDB from "../../../../lib/category";
import { UserContext } from "../../../../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CategoryValues, ResponseDB, UserAuth} from "../../../../interfaces";

export default function CategoriesList(): ReactElement {
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await categoriesDB.findAll();
      if (result.success) {
        setCategories(result.body);
      }
    };
    fetchCategories();
  }, []);

  let [categories, setCategories] = useState<CategoryValues[]>([
    { title: "", _id: "", description: "", discount: 0 },
  ]);
  let [responseDB, setResponseDB] = useState<ResponseDB>({success:false, body:''});
  let [user]:[user:UserAuth]= useContext(UserContext);


  let deleteCategory = async (id: string | undefined): Promise<void> => {
    if(id){
    const response:ResponseDB = await categoriesDB.delete(id);
    if (response.success) {
      setResponseDB({success:true, body:"Category deleted"});
      let newCategories = categories.filter(
        (category: CategoryValues) => category._id !== response.body._id
      );
      setCategories(newCategories);
    } else {
      setResponseDB(response);
    }} else {
      setResponseDB({success:false, body:'Error: Couldn\'t delete the category'})
    }
  };

  return (
    <div className={styles.componentContainer}>
      <h1 id={styles.title}>Categories</h1>
      {responseDB.body && <p>{responseDB.body}</p>}
      {!user.isAdmin && <Redirect to="/admin/login"></Redirect>}
      <Button variant="success" as={Link} to={"/admin/categories/create"}>
        Create Category
      </Button>
      <div className={styles.listContainer}>
        {categories.length && categories[0].title ? (
          categories.map((category: CategoryValues) => (
            <div key={category._id} className={styles.categoryContainer}>
              <Link to={`/admin/categories/info/${category._id}`}>
                <h2>{category.title}</h2>
                <p>
                  Discount: {category.discount ? category.discount + "%" : "no"}
                </p>
              </Link>
              <div className={styles.imgContainer}>
                <Button
                  variant="outline-warning"
                  onClick={() => deleteCategory(category._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No categories found</p>
        )}
      </div>
    </div>
  );
}
