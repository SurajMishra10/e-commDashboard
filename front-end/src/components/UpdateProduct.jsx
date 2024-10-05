import React, { useEffect, useState } from "react";
import{useParams , useNavigate} from"react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
     getProductDetails();
  },[])

  const getProductDetails = async()=>{
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json()
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
  }
  
    
  

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
      method: "put",
      body: JSON.stringify({name, price, category, company}),
      headers:{
        'Content-Type': "application/json"
      }
    });
    result = await result.json();
    navigate('/')
  }

  return (
    <div className="ragister add-product">
      <h2>Update Product</h2>
      <input className="inputBox"type="text" value={name}onChange={(e) => setName(e.target.value)}placeholder="Enter Product Name"/>

      <input className="inputBox"type="text"value={price}onChange={(e) => setPrice(e.target.value)}placeholder="Enter Price"/>

      <input className="inputBox"type="text"value={category}onChange={(e) => setCategory(e.target.value)}placeholder=" Enter Catagory"/>

      <input className="inputBox"type="text"value={company}onChange={(e) => setCompany(e.target.value)}placeholder=" Enter Company"/>

      <button onClick={updateProduct} className="signUpButton">Update Product</button>
    </div>
  );
};

export default UpdateProduct;
