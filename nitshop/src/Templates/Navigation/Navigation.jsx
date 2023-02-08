import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import TopRow from "./TopRow";

const Navigation = () => {
  return (
    <Grid container direction='row'>
      <CustomDiv padding='0px 5%' border='0px' width='100%'>
        <TopRow />
      </CustomDiv>
    </Grid>
  );
};

export default Navigation;
