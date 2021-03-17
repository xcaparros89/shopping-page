import { ReactElement, useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom';
import categoriesDB from "../../../lib/category";
import CategoryForm from "../../forms/CategoryForm";
import {CategoryValues} from '../../../interfaces'
import { Redirect } from 'react-router-dom';
import {UserContext} from '../../../lib/AuthProvider' 
import {UserAuth} from "../../../interfaces";

export default function CategoryInfo(): ReactElement {
    let {id} = useParams<{id:string}>();
    useEffect(()=>{
        const fetchCategory = async () => {
            const result = await categoriesDB.findOne('_id',id);
            setCategory(result.body);
          }
          fetchCategory();
        },[id])
        let [category, setCategory] = useState<CategoryValues>(
            {title:'', _id:'', description:'', discount:0})
            let [user]:[user:UserAuth]= useContext(UserContext);
    return (
        <div>
            {!user.isAdmin && <Redirect to='/admin/login'></Redirect>}
            <CategoryForm initialValues={category} />
        </div>
    )
}
