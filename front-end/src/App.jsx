import React from "react";
import Nav from "./components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/signUp";
import PrivateRoute from "./components/privateComponent";
import Login from "./components/login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav> </Nav>
        <Routes>

          <Route element={<PrivateRoute/>}>
          <Route path="/" element={<ProductList/>} />
          <Route path="/add" element={<AddProduct/>} />
          <Route path="/update/:id" element={<UpdateProduct/>} />
          <Route path="/logout" element={<h1>User Logout </h1>} />
          <Route path="/profile" element={<h1>User profile</h1>} />
          </Route>
          
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
