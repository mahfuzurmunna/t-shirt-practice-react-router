import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Shirt from "../Shirt/Shirt";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (tshirt) => {
    const newCart = [...cart, tshirt];
    setCart(newCart);
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  const tShirts = useLoaderData();
  return (
    <div className="home-container">
      <div className="tShirt-container">
        {tShirts.map((tshirt) => (
          <Shirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></Shirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
