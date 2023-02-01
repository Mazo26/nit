import React from "react";
import CustomDiv from "../CustomDiv/CustomDiv";
import Grid from "@mui/material/Grid";

const GridCmp = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-end'
        spacing={2}
      >
        <CustomDiv width='30%'> xs=8 </CustomDiv>
        <CustomDiv width='30%'> xs=8 </CustomDiv>
        <CustomDiv width='30%'> xs=8 </CustomDiv>
      </Grid>
      <Grid item xs={6} sm={10} md={8} lg={6}>
        <CustomDiv width='100%'> xs=8 </CustomDiv>
      </Grid>
      <Grid item xs={6} sm={2} md={4} lg={6}>
        <CustomDiv width='100%'> xs=4 </CustomDiv>
      </Grid>
      <Grid item xs={6}>
        <CustomDiv width='100%'> xs=6 </CustomDiv>
      </Grid>
      <Grid item xs={6}>
        <CustomDiv width='100%'> xs=6 </CustomDiv>
      </Grid>
    </Grid>
  );
};

export default GridCmp;
