import React, { useEffect } from "react";
import { Link, json, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signUp");
  };
  return (
    <div>
      <img className ="logo"src="https://blackpantherdigital.com/wp-content/uploads/2024/02/shopify-ecommerce-design-black-panther-digital-jhb.webp" alt="logo" />
      {auth ?<ul className="nav-ul">
        <li><Link to="/">Products</Link> </li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Product</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/logout">Logout ({JSON.parse(auth).name})</Link></li>
        </ul>
        :
        <ul className="nav-ul nav-right">
            <li><Link to="/signUp">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        }
    </div>
  );
};

export default Nav;
