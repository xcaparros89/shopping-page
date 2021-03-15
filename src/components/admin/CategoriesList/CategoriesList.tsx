import { ReactElement, useState, useEffect, useContext } from "react";
import './CategoriesListStyle.css'
import { Link } from 'react-router-dom';
import categoriesDB from "../../../lib/category";
import {UserContext} from '../../../lib/AuthProvider' 
import { Redirect } from 'react-router-dom';


export default function CategoriesList(): ReactElement {
    useEffect(()=>{
    const fetchCategories = async () => {
        const result = await categoriesDB.findAll();
        if(result.success){
            setCategories(result.body);
        }
      }
      fetchCategories();
    },[])

    let [categories, setCategories] = useState<any>([{title:'', _id:'', description:'', discount:''}])
    let [responseDB, setResponseDB] = useState('');
    let [user] = useContext(UserContext);

    let deleteCategory = async (id:string): Promise<any> => {
        const response = await categoriesDB.delete(id)
        if (response.success){
            setResponseDB('Category deleted')
            let newCategories = categories.filter((category:any)=>category._id !== response.body._id)
            setCategories(newCategories);
            console.log(response, 'response')
          } else {
            setResponseDB(response.body)
          }
      };

    return (
        <>
        <h1>Categories</h1>
        {responseDB && <p>{responseDB}</p>}
        {!user.isAdmin && <Redirect to='/admin/login'></Redirect>}
        <div className="flowerListContainer">
            {
            categories.length && categories[0].title ? (
            categories.map((category:any)=>(
                <>
            <Link to={`categoriesList/${category._id}`} key={category._id} className="flowerContainer">
                <div className="transparent-background">
                <p>{category.title}</p>
                <p>{category.description}</p>
                <p>Discount: {category.discount? category.discount+'%' : 'no'}</p>
                </div>
            </Link>
                <button onClick={()=>deleteCategory(category._id)}>Delete</button>
                </>
            ))): <p>No categories found</p>
        }
        </div>
        <Link to={'createCategory'}>Create Category</Link>
        </>
    )
}