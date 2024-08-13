import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./navbar.css";
import { Link } from "react-router-dom";
import img from "../../savedImages/israel.png";
import Cart from '../Cart/cart';
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    // Function to fetch user email from localStorage
    const fetchUserEmail = () => {
      const email = localStorage.getItem("user");
      setUserEmail(email);
    };

    // Fetch user email when the component mounts
    fetchUserEmail();

    // Poll for changes in localStorage every 500 milliseconds
    const interval = setInterval(() => {
      fetchUserEmail();
    }, 500);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbarlocal">
      <div className="wrapper">
        <div className="left">
          <div className="item linkEffect linkEffect--bgLeftToRight">
            <img className="flag_of_israel" src={img} alt="Flag of Israel" />
            <KeyboardDoubleArrowDownIcon />
          </div>
          <div className="item linkEffect linkEffect--bgLeftToRight">
            <span>Shekel</span>
            <KeyboardDoubleArrowDownIcon />
          </div>
          <div className="item linkEffect linkEffect--bgLeftToRight">
            <Link className="link" to="/products/1">Our Products</Link>
          </div>
        </div>
        <div className="center linkEffect linkEffect--bgLeftToRight">
          <Link className="link" to="/">מותגים זה אנחנו</Link>
        </div>
        <div className="right">
          {userEmail ? (
            <div className="item">
              <span>Welcome, {userEmail}</span>
            </div>
          ) : (
            <div className="item linkEffect linkEffect--bgLeftToRight">
              <Link className="link" to="/">Home</Link>
            </div>
          )}
          <div className="icons">
            <Link className="link linkEffect linkEffect--bgLeftToRightIcon" to="/products/1">
              <SearchIcon />
            </Link>
            <Link className="link linkEffect linkEffect--bgLeftToRightIcon" to="/login">
              <PersonOutlineOutlinedIcon />
            </Link>
            <span className="cart linkEffect linkEffect--bgLeftToRightIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </span>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
