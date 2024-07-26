import React, { useState, useEffect } from 'react';
import "./products.css";
import List from '../components/List/List';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const param = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [categories, setCategories] = useState([
    "ELECTRONICS", 
    "JEWELERY", 
    "MEN'S CLOTHING", 
    "WOMEN'S CLOTHING"
  ]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      let url = "https://fakestoreapi.com/products";
      if (selectedCategory) {
        const categoryMap = {
          "ELECTRONICS": "electronics",
          "JEWELERY": "jewelery",
          "MEN'S CLOTHING": "men's clothing",
          "WOMEN'S CLOTHING": "women's clothing"
        };
        url = `https://fakestoreapi.com/products/category/${categoryMap[selectedCategory]}`;
      }
      console.log(`Fetching data from URL: ${url}`); // Debugging line
      try {
        const response = await axios.get(url);
        console.log('API Response:', response.data); // Debugging line
        setItems(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          {categories.map((category, index) => (
            <div className='inputItem' key={index}>
              <input 
                type="radio" 
                id={`category-${index}`} 
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              <label htmlFor={`category-${index}`}>{category}</label>
            </div>
          ))}
        </div>
        <div className='filterItem'>
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input 
              type="range" 
              max={1000} 
              min={0} 
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)} 
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort By Price</h2>
          <div className="inputItem">
            <input 
              type="radio" 
              id="asc" 
              value="asc" 
              name="price" 
              onChange={() => setSort("asc")} 
            />
            <label htmlFor="asc">Price (low to high)</label>
          </div>
          <div className="inputItem">
            <input 
              type="radio" 
              id="desc" 
              value="desc" 
              name="price" 
              onChange={() => setSort("desc")} 
            />
            <label htmlFor="desc">Price (high to low)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img className="catImage" src="../savedImages/israel.png" alt="" />
        <List items={items} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}

export default Products;
