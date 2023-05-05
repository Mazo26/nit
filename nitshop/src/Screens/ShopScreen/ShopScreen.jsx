import React, { useContext } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import { CartContext } from "../../context/CartContext";

const ShopScreen = () => {
  const { items } = useContext(CartContext);

  console.log(items);

  return (
    <>
      <Navigation />
      <div>ShopScreen</div>
    </>
  );
};

export default ShopScreen;
