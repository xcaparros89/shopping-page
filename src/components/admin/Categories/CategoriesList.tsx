import React, { ReactElement, useState, useEffect, useContext } from "react";
import './CategoriesListStyle.css'
import { Link } from 'react-router-dom';
import categoriesDB from "../../../lib/category";
import { Redirect } from 'react-router-dom';
import {UserContext} from '../../../lib/AuthProvider' 


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
    return (
        <>
        {!user.isAdmin && <Redirect to='/admin/login'></Redirect>}
        <h1>Categories</h1>
        <div className="flowerListContainer">
            {categories.map(category=>(
            <Link to={`/categoriesList/${category._id}`} key={category._id} className="flowerContainer">
                <div className="transparent-backgroupd">
                <p>{category.title}</p>
                <p>{category.description}</p>
                <p>Discount: {category.discount? category.discount+'%' : 'no'}</p>
                </div>
            </Link>
            ))}
        </div>
        <Link to={'/createCategory'}>Create Category</Link>
        </>
    )
}