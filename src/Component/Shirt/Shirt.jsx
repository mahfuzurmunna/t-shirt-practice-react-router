import React from "react";
import "./Shirt.css";

const Shirt = ({ tshirt, handleAddToCart }) => {
  const { _id, gender, index, name, picture, price } = tshirt;
  return (
    <div className="t-shirt">
      <h2>{name}</h2>
      <img src={picture} alt="" />
      <p>${price}</p>
      <button onClick={() => handleAddToCart(tshirt)} className="btn-buy">
        Buy Now
      </button>
    </div>
  );
};

export default Shirt;
