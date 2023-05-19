import { Grid } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { colors, fontSize } from "../../util/theme";
import { UserContext } from "../../context/UserContext";
import { fetchAllUsers } from "../../api/userApi";

const LoginTab = () => {
  const styles = {
    mainDiv: {
      padding: "5% 10%",
    },
    textStyle: {
      fontSize: fontSize.large,
      marginBottom: "20px",
    },
    inputStyle: {
      padding: "10px 5px",
      marginBottom: "15px",
    },
    checkboxWrapper: {
      display: "flex",
      marginBottom: "20px",
      alignItems: "center",
      gap: "5px",
    },
    buttonStyle: {
      width: "80px",
      display: "flex",
      padding: "10px",
      cursor: "pointer",
      justifyContent: "center",
      fontSize: fontSize.normal,
      borderRadius: "5px",
      border: "none",
      color: colors.white,
      backgroundColor: colors.accentColor,
    },
    roundDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.accentColor,
      borderRadius: "50%",
      color: colors.white,
      width: "70px",
      height: "70px",
      margin: "auto",
    },
    formStyle: {
      display: "flex",
      flexDirection: "column",
    },
  };

  const [users, setUsers] = useState([]);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    let mount = false;

    if (mount) return;
    fetchAllUsers().then((allUsers) => {
      setUsers(allUsers);
      mount = true;
    });
  }, []);

  console.log("users", users);

  const submitHandler = (e) => {
    e.preventDefault();
    setUser({
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    if (user.email !== e.target[0].value) return;
    if (user.password !== e.target[1].value) return;

    console.log("logged in!");
  };

  return (
    <Grid lg={12} style={styles.mainDiv} container>
      <Grid lg={5} md={5} display='flex' flexDirection='column'>
        <form onSubmit={loginHandler} style={styles.formStyle}>
          <Text style={styles.textStyle}>Login to your acoount</Text>
          <input
            style={styles.inputStyle}
            type='mail'
            placeholder='E-mail'
            required
          />
          <input
            style={styles.inputStyle}
            type='password'
            placeholder='Password'
            required
          />
          <SimplifiedDiv style={styles.checkboxWrapper}>
            <input type='checkbox' />
            <Text>Keep me signed in</Text>
          </SimplifiedDiv>
          <PrimaryButton style={styles.buttonStyle}>Login</PrimaryButton>
        </form>
      </Grid>
      <Grid lg={2} display='flex'>
        <div style={styles.roundDiv}>OR</div>
      </Grid>
      <Grid lg={5} display='flex' flexDirection='column'>
        <Text style={styles.textStyle}>New User Signup!</Text>
        <form onSubmit={submitHandler} style={styles.formStyle}>
          <input
            style={styles.inputStyle}
            type='text'
            placeholder='Name'
            required
          />
          <input
            style={styles.inputStyle}
            type='email'
            placeholder='Email Address'
            required
          />
          <input
            style={styles.inputStyle}
            type='password'
            placeholder='Password'
            required
          />
          <PrimaryButton style={styles.buttonStyle}>Signup</PrimaryButton>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginTab;
