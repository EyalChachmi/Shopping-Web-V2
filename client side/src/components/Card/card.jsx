import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img
            src={item.img}
            className="mainImg"
          />
          <img
            src={
              item.img2
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.newPrice}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;