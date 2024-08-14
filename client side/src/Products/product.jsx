import React, { useEffect, useState } from 'react';
import "./product.css";
import { useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/cartReducer';

const Product = () => {
  const { id } = useParams();

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState({});
  const [addedToCart, setAddedToCart] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setItem(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: item.id,
      title: item.title,
      desc: item.description,
      price: item.price,
      img: item.image,
      quantity,
    }));
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img className="smallImg1" src={item.image} alt="" onClick={() => setSelectedImg(0)} />
          <img className="smallImg2" src={item.image} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={item.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{item.title}</h1>
        <span className="price">${item.price}</span>
        <p>{item.description}</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add" onClick={handleAddToCart}>
          <AddShoppingCartIcon />ADD TO CART
        </button>

        {addedToCart && <div className="cart-message">Product added to cart!</div>} {}
        <div className="info">
          <span style={{ textTransform: 'uppercase' }}>Product Type: {item.category}</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product;
