import React from 'react'
import "./product.css"
import { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt=""/>
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$999</span>
        <p>I've come to make an announcement. Shadow The Hedgehog, you're a bitch ass motherfucker, you pissed on my fucking wife. That's right, he took his hedgehog fucking quilly dick out and he pissed on my fucking wife and he said his dick was "tHiS bIiG" and I said that's disgusting. So I'm making a callout post on my Twitter.com, Shadow you've got a small dick, it's the size of this walnut and guess what, here's what my dong looks like: PGHOOOGHHHH That's right baby. Tall points, no quills, no pillows, look at that it looks like two balls and a bong. He fucked my wife so guess what? I'm gonna fuck the earth. That's right, this is what you get! MY SUPER LASER PISS!!! Except I'm not gonna piss on the earth, I'm gonna go higher. I'M PISSING ON THE MOON!!! How do you like that, Obama?! I pissed on the moon, you IDIOT!! You have 23 hours before the piss droplets hit the fucking earth, now get out of my sight before I piss on you too.</p>
        <div className="quantity"> 
          <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
            {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon>ADD TO CART</AddShoppingCartIcon>
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon>ADD TO WISHLIST</FavoriteBorderIcon>
          </div>
          <div className="item">
            <AccountBalanceIcon/>ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>DESCRIPTION</span>
        </div>
      </div>
    </div>
  )
}

export default Product