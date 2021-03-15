import { ReactElement, useEffect, useState } from 'react'
import './SearchStyle.css'
import { Link } from 'react-router-dom';
import itemsDB from "../../../lib/item";


export default function Search(): ReactElement {
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

    return (
        <div className="flowerListContainer">
            {items.map((item:any)=>(
            <Link to={`/info/${item._id}`} key={item._id} className="flowerContainer" style={{backgroundImage: `url(${item.img})`}}>
                <div className="transparent-backgroupd">
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>Price: {item.price}€</p>
                </div>
            </Link>
            ))}
        </div>
    )
}
