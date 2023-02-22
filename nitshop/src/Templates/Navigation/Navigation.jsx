import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import TopRow from "./TopRow";
import MainBar from "./MainBar";
import LinkBar from "./LinkBar";

const Navigation = () => {
  return (
    <Grid container direction='row'>
      <TopRow />
      <MainBar />
      <LinkBar />
    </Grid>
  );
};

export default Navigation;
