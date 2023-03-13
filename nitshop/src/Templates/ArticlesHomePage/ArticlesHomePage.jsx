import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";

const ArticlesHomePage = () => {
  //Postaviti funkcije koje ce izlistavati artikle

  return (
    <SimplifiedDiv style={{}}>
      <Grid container direction='row'>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
        <Grid item md={4} lg={4}>
          <ArticleCard />
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;
