import React, { ReactElement } from 'react'
import { Link } from "react-router-dom";
import CategoryForm from '../../forms/CategoryForm'

function CreateCategory(): ReactElement {
    return (
        <div>
            <CategoryForm initialValues={{title:'', description:'', discount:0}}/>
            <Link to={"categoriesList"}>Return</Link>
        </div>
    )
}

export default CreateCategory
