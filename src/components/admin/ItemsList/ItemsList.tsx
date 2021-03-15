import { ReactElement, useState, useEffect, useContext } from "react";
import styles from "./ItemList.module.css";
import { Link } from "react-router-dom";
import itemsDB from "../../../lib/item";
import {UserContext} from '../../../lib/AuthProvider' 
import { Redirect } from 'react-router-dom';
import Button from "react-bootstrap/Button";

export default function ItemsList(): ReactElement {
  useEffect(() => {
    const fetchItems = async () => {
      const result = await itemsDB.findAll();
      if(result.success){
        setItems(result.body);
      }
    };
    fetchItems();
  }, []);
  let [items, setItems] = useState<any>([
    { title: "", _id: "", description: "", price: "", tags: [] },
  ]);
  let [responseDB, setResponseDB] = useState('');
  let [user] = useContext(UserContext);
  
  let deleteItem = async (id:string): Promise<any> => {
    const response = await itemsDB.delete(id)
    if (response.success){
      setResponseDB('Item deleted')
      let newItems = items.filter((item:any)=>item._id !== response.body._id)
      setItems(newItems);
      console.log(response, 'response')
    } else {
      setResponseDB(response.body)
    }
  };
  return (
    <div className={styles.componentContainer}>
    <h1 id={styles.title}>Item List</h1>
    {responseDB && <p>{responseDB}</p>}
      {!user.isAdmin && <Redirect to='/admin/login'></Redirect>}
      <Button variant='success' as={Link} to="/admin/createItem" >Create new Item</Button>
      <div className={styles.listContainer}>
        {
         items.length && items[0].title ? (
              items.map((item:any) => {
                return (
                <div key={item._id} className={styles.itemContainer}>
                  <Link
                    to={`itemsList/${item._id}`}
                  >
                      <h2>{item.title}</h2>
                      <p>Price: {item.price}€</p>
                      <p>Discount: {item.discount ? item.discount + "%" : "no"}</p>
                  </Link>
                  <div className={styles.imgContainer}>
                      <img src={item.img} alt={item.title} />
                      <Button variant='outline-warning' onClick={()=>deleteItem(item._id)} >Delete</Button>
                  </div>
                      </div>
          )})):
          <p>No items found</p>
        }
      </div>
    </div>
  );
}
