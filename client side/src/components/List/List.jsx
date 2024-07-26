import React from 'react';
import './list.css';
import Card from '../Card/card';

const List = ({ items, maxPrice, sort }) => {
  
  // Filter items based on price
  const filteredItems = items.filter(item => item.price <= maxPrice);

  // Sort items based on price
  const sortedItems = filteredItems.slice().sort((a, b) => {
    if (sort === 'asc') return a.price - b.price;
    if (sort === 'desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="list">
      {sortedItems.map(item => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
