import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton/StyledButton";

const App = () => {
  const [innerText, setInnerText] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    clicked ? setInnerText("Clicked") : setInnerText("Click me");
  }, [clicked]);

  function buttonClick() {
    setClicked(!clicked);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <StyledButton innerText={innerText} onClickHandler={buttonClick} />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
