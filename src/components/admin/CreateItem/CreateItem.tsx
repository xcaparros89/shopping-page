import { ReactElement } from 'react'
import { Link } from "react-router-dom";
import ItemForm from '../../forms/ItemForm'

function CreateItem(): ReactElement {
    return (
        <div>
            <ItemForm initialValues={{title:'', description:'', img:'', price:0, discount:0, tags:[]}}/>
            <Link to={"itemsList"}>Return</Link>
        </div>
    )
}

export default CreateItem
