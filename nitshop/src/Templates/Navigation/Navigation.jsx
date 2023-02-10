import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import TopRow from "./TopRow";

const Navigation = () => {
  return (
    <Grid container direction='row'>
      <TopRow />
    </Grid>
  );
};

export default Navigation;
