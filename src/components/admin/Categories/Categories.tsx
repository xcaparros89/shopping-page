import React, { ReactElement } from 'react'
import './CategoriesStyle.css'
import { Link } from 'react-router-dom';
import data from '../../../plants.json'
interface Props {
    
}

export default function Categories({}: Props): ReactElement {
    return (
        <div className="flowerListContainer">
            {data.map(item=>(
            <Link to={`/info/${item.id}`} key={item.id} className="flowerContainer" style={{backgroundImage: `url(${item.src})`}}>
                <div className="transparent-backgroupd">
                <p>{item.title}</p>
                <p>{item.info}</p>
                <p>Price: {item.price}€</p>
                </div>
            </Link>
            ))}
        </div>
    )
}
