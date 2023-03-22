import React from "react";
import Text from "../../components/Text/Text";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors } from "../../util/theme";
import { Grid } from "@mui/material";

const FooterLinkBar = () => {
  const styles = {
    mainHolder: {
      backgroundColor: colors.secondColor,
      padding: "20px 0px",
    },
    headingText: {
      textAlign: "center",
    },
  };

  return (
    <SimplifiedDiv style={styles.mainHolder}>
      <Grid container direction='row'>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text style={styles.headingText}>Service</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text style={styles.headingText}>Quick shop</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text style={styles.headingText}>Policies</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text style={styles.headingText}>About Shopper</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}></Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default FooterLinkBar;
