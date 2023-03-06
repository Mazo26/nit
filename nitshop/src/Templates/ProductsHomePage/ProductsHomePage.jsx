import React from "react";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import CategoryTab from "../CategoryTab/CategoryTab";

const styles = {
  container: {
    padding: "0px 10%",
  },
};

const ProductsHomePage = () => {
  return (
    <SimplifiedDiv style={styles.container}>
      <Grid container direction='row'>
        <Grid item md={3} lg={3}>
          <CategoryTab />
        </Grid>
        <Grid item md={9} lg={9}>
          <Text>Grid 8</Text>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default ProductsHomePage;
