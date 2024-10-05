import React, { useState } from "react";
import{useNavigate} from "react-router-dom"

const Product =()=>{

const [name, setName]=useState("");
const [price, setPrice]=useState("");
const [category, setCategory]=useState("");
const [company, setCompany]=useState("");
const [error, setError]=useState(false)
const navigate = useNavigate();

const addData = async()=>{
    if(!name || !price || !category || !company){
        setError(true)
        return false;
    }
 const userId=JSON.parse(localStorage.getItem('user'))._id;


    let result = await fetch('http://localhost:5000/add-product',{
        method:'post',
        body: JSON.stringify({name,price,category,company,userId}),
        headers:{
            'Content-type':'application/json'
        },
    });
    result = await result.json();
    navigate('/')
}

    return (
        <div className="ragister add-product">
            <h1>Add Product</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Product Name"/>

           {error && !name && <span className="invalid-input">Enter valid name</span>} 

            <input className="inputBox" type="text" value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder="Enter Price"/>
            
            {error && !price  && <span className="invalid-input">Enter valid price</span>}

            <input className="inputBox" type="text" value={category} onChange={(e)=>setCategory(e.target.value)}  placeholder=" Enter Catagory"/>

            {error && !category  && <span className="invalid-input">Enter valid category</span>}

            <input className="inputBox" type="text" value={company} onChange={(e)=>setCompany(e.target.value)}  placeholder=" Enter Company"/>

            {error && !company && <span className="invalid-input">Enter valid name</span>}
            
            <button onClick={addData} className="signUpButton">Add</button>
        </div>
    )
}

export default Product;