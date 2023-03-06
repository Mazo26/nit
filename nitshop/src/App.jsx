import React from "react";
import "./App.css";
import Navigation from "./Templates/Navigation/Navigation";
import Slider from "./Templates/Slider/Slider";
import SimplifiedDiv from "./components/SimplifiedDiv/SimplifiedDiv";
import ProductsHomePage from "./Templates/ProductsHomePage/ProductsHomePage";

const App = () => {
  return (
    <>
      <Navigation />
      <Slider />
      <ProductsHomePage />
    </>
  );
};

export default App;
