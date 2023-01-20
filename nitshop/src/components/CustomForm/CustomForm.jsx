import React, { useState } from "react";
import StyledInput from "../StyledInput/StyledInput";
import StyledButton from "../StyledButton/StyledButton";

const CustomForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function nameHandler(e) {
    setName(e.target.value);
  }

  function lastNameHandler(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <StyledInput onChangeHandler={nameHandler} value={name} />
      <StyledInput onChangeHandler={lastNameHandler} value={lastName} />
      <StyledButton innerText='Send' />
    </div>
  );
};

export default CustomForm;
