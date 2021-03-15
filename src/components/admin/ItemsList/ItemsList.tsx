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
  let [items, setItems] = useState([
    { title: "", _id: "", description: "", price: "", tags: [] },
  ]);
  let deleteItem = async (id:string): Promise<any> => {
    await itemsDB.delete(id)
  };
let [user, setUser] = useContext(UserContext);
  return (
    <>
      {!user.isAdmin && <Redirect to='/admin/login'></Redirect>}
      <div className="flowerListContainer">
        {
         items[0].title ? (
              items.map((item) => {
                return (
                <>
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
                          {item.tags && item.tags.map(tag=>(
                              <ul>{tag}</ul>
                          ))}
                      </div>
                    </div>
                  </Link>
                      <button onClick={()=>deleteItem(item._id)}>Delete</button>
                      </>
          )})):
          <p>No items found</p>
        }
      </div>
      <Link to={"createItem"}>Create Item</Link>
    </>
  );
}
