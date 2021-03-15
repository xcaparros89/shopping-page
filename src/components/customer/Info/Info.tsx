import React, { ReactElement, useEffect,useState } from 'react'
import data from '../../../plants.json';
interface Props {
    
}

export default function Info({match}:any): ReactElement {
    let [plant, setPlant] = useState({title:'', info:'', price:0, src:''})
    useEffect(() => {
        let id = match.params.id;
        data.map(item =>{
            if(id==item.id){
                setPlant(item)
            }});
    },[]);
    console.log(plant);
    return (
        <div>
            <h1>{plant.title}</h1>
            <img src={plant.src} />
            <p>{plant.info}</p>
            <p>Price: {plant.price}€</p>
        </div>
    )
}
