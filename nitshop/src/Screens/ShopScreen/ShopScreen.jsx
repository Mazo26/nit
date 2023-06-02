import React, { useContext } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import Footer from "../../Templates/Footer/Footer";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import CounterComponent from "../../Templates/CounterComponent/CounterComponent";

const ShopScreen = () => {
  return (
    <>
      <Navigation />
      <CounterComponent />
      <Footer />
    </>
  );
};

export default ShopScreen;
