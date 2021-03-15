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
        setCategories(result.body);
      }
      fetchCategories();
    },[])
    let [categories, setCategories] = useState([{title:'', _id:'', description:'', discount:''}])
    let [user, setUser] = useContext(UserContext);
    let deleteCategory = async (id:string): Promise<any> => {
        await categoriesDB.delete(id)
      };

    return (
        <>
        {!user.isAdmin && <Redirect to='/admin/login'></Redirect>}
        <h1>Categories</h1>
        <div className="flowerListContainer">
            {
                categories[0].title ? (
            categories.map(category=>(
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