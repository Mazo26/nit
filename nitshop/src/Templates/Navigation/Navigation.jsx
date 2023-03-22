import React from "react";
import Grid from "@mui/material/Grid";
import TopRow from "./TopRow";
import MainBar from "./MainBar";
import LinkBar from "./LinkBar";

const Navigation = () => {
  return (
    <Grid container direction='row'>
      <TopRow id='top' />
      <MainBar />
      <LinkBar />
    </Grid>
  );
};

export default Navigation;
