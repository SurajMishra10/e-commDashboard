import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  
  const deleteProduct=async(id)=>{
      let result = await fetch(`http://localhost:5000/product/${id}`,{
        method:"Delete"
      });
    result= await result.json();
    if(result){
      alert("Do you want to delete ?")
      getProducts();
    }
};

const searchHandle= async(e)=>{
  let key = e.target.value;
  if(key){
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if(result){
      setProducts(result)
    }
  }else{
    getProducts()
  }
  
}

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <input className="search-input" type="text" placeholder="Search Product....."
      onChange={searchHandle}/>
      <ul>
        <li className="font-size">Sr. No</li>
        <li className="font-size">Name</li>
        <li className="font-size">Price</li>
        <li className="font-size">Category</li>
        <li className="font-size">Operation</li>
      </ul>

    {  
      products.length>0? products.map((item, index) =>
        <ul key={item._id}>
          <li >{index+1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li><button onClick={()=>deleteProduct(item._id)}className="delete-button">Delete</button>
         <Link to={"/update/"+item._id}><button className="update-button">Update</button></Link>
         
         </li>
        </ul>
      ):<h1>No Result Found</h1>
      
    }
  
    </div>
    )
}

export default ProductList;
