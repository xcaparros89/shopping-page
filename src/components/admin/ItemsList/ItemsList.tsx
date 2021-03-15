import React, { ReactElement, useState, useEffect, useContext } from "react";
import "./SearchStyle.css";
import { Link } from "react-router-dom";
import itemsDB from "../../../lib/item";
import {UserContext} from '../../../lib/AuthProvider' 
import { Redirect } from 'react-router-dom';

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
  let [user, setUser] = useContext(UserContext);
  
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
    <>
    <h1>Item List</h1>
    {responseDB && <p>{responseDB}</p>}
      {!user.isAdmin && <Redirect to='/admin/login'></Redirect>}
      <div className="flowerListContainer">
        {
         items.length && items[0].title ? (
              items.map((item:any) => {
                return (
                <div>
                  <Link
                    to={`itemsList/${item._id}`}
                    key={item._id}
                    className="flowerContainer"
                    style={{ background: "black" }}
                  >
                    <div className="transparent-background">
                      <p>{item.title}</p>
                      <p>{item.description}</p>
                      <p>Price: {item.price}€</p>
                      <div>
                          {item.tags && item.tags.map((tag:any)=>(
                              <ul>{tag}</ul>
                          ))}
                      </div>
                    </div>
                  </Link>
                      <button onClick={()=>deleteItem(item._id)}>Delete</button>
                      </div>
          )})):
          <p>No items found</p>
        }
      </div>
      <Link to={"createItem"}>Create Item</Link>
    </>
  );
}
