import React, { ReactElement, useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom';
import categoriesDB from "../../../lib/category";
import CategoryForm from "../../forms/CategoryForm";
import {idType} from '../../../interfaces'
import { Redirect } from 'react-router-dom';
import {UserContext} from '../../../lib/AuthProvider' 

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
        let [user, setUser] = useContext(UserContext);
    return (
        <div>
            {!user.isAdmin && <Redirect to='/admin/login'></Redirect>}
            <CategoryForm initialValues={category} />
        </div>
    )
}
