import React from "react";
import "./App.css";
import ToDo from "./components/ToDo/ToDo";
import GridCmp from "./components/Grid/Grid";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import StyledButton from "./components/StyledButton/StyledButton";

const App = () => {
  return (
    <>
      <PrimaryButton padding={10} borderColor='yellow'>
        Primary button
      </PrimaryButton>
    </>
  );
};

export default App;
