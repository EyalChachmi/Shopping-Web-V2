import React from 'react'
import "./products.css"
import List from '../components/List/List'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';


const products = () => {

  
  const param =parseInt(useParams().id);
  const [maxPrice,setMaxPrice]=useState(1000);
  const [sort,setSort]=useState(null);



  console.log(param)
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
            <h2>Product categories</h2>
            <div className='inputItem'>
              <input type="checkbox" id="1" value={1}/>
              <label htmlfor="1">Pants</label>
            </div>
            <div className='inputItem'>
              <input type="checkbox" id="2" value={2}/>
              <label htmlfor="2">Shirts</label>
            </div>
            <div className='inputItem'>
              <input type="checkbox" id="3" value={3}/>
              <label htmlfor="3">Shoes</label>
            </div>
        </div>
        <div className='filterItem'>
            <h2>Filter By Price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" max={1000} min={0} onChange={(e)=>setMaxPrice(e.target.value)}></input> 
              <span>{maxPrice}</span>
            </div>
        </div>
        <div className='filterItem'>
            <h2>Sort By Price</h2>
            <div className="inputItem">
              <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")}/>
              <label htmlFor="asc">Price (low to high)</label>
            </div>
            <div className="inputItem">
            <input type="radio" id="des" value="des" name="price" onChange={(e)=>setSort("des")}/>
            <label htmlFor="des">Price (high to low)</label>
          </div>
        </div>
      </div>
      <div className='right'>
          <img className="catImage" src="../savedImages/israel.png" alt=""></img>
          <List param={param} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default products