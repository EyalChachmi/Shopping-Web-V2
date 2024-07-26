import React, { useEffect, useState } from 'react';
import "./onTheTable.css";
import Card from '../Card/card';
import axios from 'axios';

const OnTheTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const shuffledArr = shuffleArray(response.data);
        setProducts(shuffledArr);

      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const shuffleArray = (arr) =>{
    return arr.sort(() => Math.random() - 0.5);
  };

  return (
    <div className='onTheTable'>
      <div className="top">
        <h1>Featured Products</h1>
        <p>
          Here are some featured products on our shop!
        </p>
      </div>
      <div className='bot'>
        {products.slice(0, 5).map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default OnTheTable;
