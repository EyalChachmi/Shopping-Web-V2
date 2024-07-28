import { Description } from '@mui/icons-material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css'
import {useSelector} from "react-redux";
import {removeItem, resetCart} from "../../redux/cartReducer"
import {useDispatch} from "react-redux";

const Cart = () => {
    

    const products = useSelector((state)=>state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => total += item.quantity * item.price);
        return total.toFixed(2);
    };
    
    
  return (
    <div className='cart'>
        <h1>Products inside the cart</h1>
        {products?.map((item) => (
            <div className='item' key={item.id}>
                <img src={item.img}/>
                <div className='details'>
                <h1> {item.title}</h1>
                <p>{item.description?.substring(0,100)}</p>
                <div className='price'> {item.quantity} x ${item.price} </div>
                </div>
                <DeleteIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
                </div>
                
        ))}
        <div className='total'>
            <span>SUBTOTAL</span>
            <spam>${totalPrice()}</spam>
        </div>
        <button>Checkout</button>
        <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
  )
}

export default Cart