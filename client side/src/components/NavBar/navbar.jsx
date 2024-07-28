import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./navbar.css"
import { Link } from "react-router-dom";
import img from "../../savedImages/israel.png"
import { useState } from 'react';
import Cart from '../Cart/cart';
import {useSelector} from "react-redux";




const Navbar = () => {


  const [open,setOpen]= useState(false)
  const products = useSelector((state)=>state.cart.products);


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img class="flag_of_israel"src={img} />
            <KeyboardDoubleArrowDownIcon />
          </div>
          <div className="item">
            <span>Shekel</span>
            <KeyboardDoubleArrowDownIcon />
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">בגדים זה אנחנו</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Home</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className='cart' onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};
export default Navbar