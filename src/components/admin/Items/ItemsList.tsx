import React, { ReactElement } from 'react'
import './SearchStyle.css'
import { Link } from 'react-router-dom';
import data from '../../../plants.json'


export default function ItemsList(): any {
    return (
        <div className="flowerListContainer">
            {data.map(item=>(
            <Link to={`/modify/${item.id}`} key={item.id} className="flowerContainer" style={{backgroundImage: `url(${item.src})`}}>
                <div className="transparent-backgroupd">
                <p>{item.title}</p>
                <p>{item.info}</p>
                <p>Price: {item.price}€</p>
                </div>
            </Link>
            ))}
            <p>Add item</p>
        </div>
    )
}
