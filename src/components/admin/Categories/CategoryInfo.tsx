import React, { ReactElement, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import categoriesDB from "../../../lib/category";
import CategoryForm from "../../forms/CategoryForm";
import {idType} from '../../../interfaces'

export default function CategoryInfo(): ReactElement {
    let {id} = useParams<idType>();
    useEffect(()=>{
        const fetchCategory = async () => {
            const result = await categoriesDB.findOne('_id',id);
            setCategory(result.body);
          }
          fetchCategory();
        },[])
        let [category, setCategory] = useState([
            {title:'', _id:'', description:'', discount:0}])
        console.log(category)
    return (
        <div>
            <CategoryForm initialValues={category} />
        </div>
    )
}
