import { ReactElement, useEffect,useState } from 'react'
import data from '../../../plants.json';

export default function Info({match}:any): ReactElement {
    let [plant, setPlant] = useState({title:'', info:'', price:0, src:''})
    let id = match.params.id;
    useEffect(() => {
        data.forEach(item =>{
            if(id===item.id){
                setPlant(item)
            }});
    },[id]);


    console.log(plant);
    return (
        <div>
            <h1>{plant.title}</h1>
            <img src={plant.src} alt={plant.title}/>
            <p>{plant.info}</p>
            <p>Price: {plant.price}€</p>
        </div>
    )
}
