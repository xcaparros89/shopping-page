import React, { ReactElement } from 'react'
import { Link } from "react-router-dom";
import ItemForm from '../../forms/ItemForm'
interface Props {
    
}

function CreateItem({}: Props): ReactElement {
    return (
        <div>
            <ItemForm />
            <Link to={"itemsList"}>Return</Link>
        </div>
    )
}

export default CreateItem
