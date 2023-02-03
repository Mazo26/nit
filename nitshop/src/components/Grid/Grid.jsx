import React from "react";
import CustomDiv from "../CustomDiv/CustomDiv";
import Grid from "@mui/material/Grid";

const GridCmp = () => {
  return (
    <Grid container>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-end'
      >
        <Grid item xs={2}>
          <CustomDiv width='100%'> xs=2 </CustomDiv>
        </Grid>
        <Grid item xs={6}>
          <CustomDiv width='100%'> xs=6 </CustomDiv>
        </Grid>
        <Grid item xs={4}>
          <CustomDiv width='100%'> xs=4 </CustomDiv>
        </Grid>
      </Grid>
      <Grid item xs={8} sm={12} md={12} lg={12}>
        <CustomDiv width='100%'> xs=8 </CustomDiv>
      </Grid>
      <Grid item xs={4} sm={12} md={12} lg={12}>
        <CustomDiv width='100%'> xs=4 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width='100%'> xs=2 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width='100%'> xs=2 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width='100%'> xs=2 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width='100%'> xs=2 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width='100%'> xs=2 </CustomDiv>
      </Grid>
      <Grid item xs={2}>
        <CustomDiv width='100%'> xs=2 </CustomDiv>
      </Grid>
    </Grid>
  );
};

export default GridCmp;
