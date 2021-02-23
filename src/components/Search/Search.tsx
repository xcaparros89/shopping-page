import React, { ReactElement } from 'react'
import './SearchStyle.css'
import data from '../../plants.json'
interface Props {
    
}

export default function Search({}: Props): ReactElement {
    return (
        <div className="flowerListContainer">
            {data.map(item=>(
            <div key={item.id} className="flowerContainer" style={{backgroundImage: `url(${item.src})`}}>
                <p>{item.title}</p>
                <p>{item.info}</p>
                <p>Price: {item.price}€</p>
            </div>
            ))}
        </div>
    )
}
