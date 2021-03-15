import React, { ReactElement } from 'react'
import { Link } from "react-router-dom";
import CategoryForm from '../../forms/CategoryForm'
interface Props {
    
}

function CreateCategory({}: Props): ReactElement {
    return (
        <div>
            <CategoryForm />
            <Link to={"categoriesList"}>Return</Link>
        </div>
    )
}

export default CreateCategory
