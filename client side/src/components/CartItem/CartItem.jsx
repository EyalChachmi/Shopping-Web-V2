import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({item}) => {
    console.log(item);
    return(
            <div className='item' key={item.id}>
                <img src={item.img}/>
                <div className='details'>
                    <h1> {item.title}</h1>
                    <p>{item.description?.substring(0,100)}</p>
                    <div className='price'> 1 x ${item.price} </div>
                </div>
                <DeleteIcon className='delete'/>
            </div>
    );
};

export default CartItem;
