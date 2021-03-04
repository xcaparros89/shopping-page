import React, { ReactElement, useState, useEffect } from "react";
import './CategoriesListStyle.css'
import { Link } from 'react-router-dom';
import categoriesDB from "../../../lib/categories";

export default function CategoriesList(): ReactElement {
    useEffect(()=>{
    const fetchCategories = async () => {
        const result = await categoriesDB.findAll();
        setCategories(result.body);
      }
      fetchCategories();
    },[])
    let [categories, setCategories] = useState([{title:'', _id:'', description:'', discount:''}])
    return (
        <>
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
