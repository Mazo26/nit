import React, { useContext } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const ShopScreen = () => {
  const { items } = useContext(CartContext);
  const { user } = useContext(UserContext);

  console.log(items);

  return (
    <>
      <Navigation />
      <div>{user.toString()}</div>
    </>
  );
};

export default ShopScreen;
