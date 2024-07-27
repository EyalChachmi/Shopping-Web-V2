import { Description } from '@mui/icons-material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css'
const Cart = () => {
    const sampleData=[
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "sleeves",
            price: 19,
            description: "This a sample text. This a sample text. This a sample text. This a sample text. This a sample text. "
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "sleeves",
            price: 19,
            description: "This a sample text. This a sample text. This a sample text. This a sample text. This a sample text. "
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "sleeves",
            price: 11,
            description: "This a sample text. This a sample text. This a sample text. This a sample text. This a sample text. "
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "sleeves",
            price: 12,
            description: "This a sample text. This a sample text. This a sample text. This a sample text. This a sample text. "
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "sleeves",
            price: 14,
            description: "This a sample text. This a sample text. This a sample text. This a sample text. This a sample text. "
        }
    ]

    
  return (
    <div className='cart'>
        <h1>Products inside the cart</h1>
        {sampleData?.map((item) => (
            <div className='item' key={item.id}>
                <img src={item.img}/>
                <div className='details'>
                <h1> {item.title}</h1>
                <p>{item.description?.substring(0,100)}</p>
                <div className='price'> 1 x ${item.price} </div>
                </div>
                <DeleteIcon className='delete'/>
                </div>
                
        ))}
        <div className='total'>
            <span>SUBTOTAL</span>
            <spam>$69</spam>
        </div>
        <button>Checkout</button>
        <span className='reset'>Reset Cart</span>
        </div>
  )
}

export default Cart