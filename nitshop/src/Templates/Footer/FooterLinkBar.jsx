import React from "react";
import Text from "../../components/Text/Text";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors, fontSize, fontWeight } from "../../util/theme";
import { Grid } from "@mui/material";

const FooterLinkBar = () => {
  const styles = {
    mainHolder: {
      backgroundColor: colors.secondColor,
      padding: "20px 150px",
    },
    headingText: {
      textAlign: "left",
      fontWeight: fontWeight.mediumBold,
      color: colors.gray,
    },
    boxHolder: {
      textAlign: "left",
      padding: "10px 20px",
    },
    innerBoxHolder: {
      textAlign: "left",
      padding: "20px 0px",
      lineHeight: "30px",
    },
    innerBoxText: {
      fontSize: fontSize.optimal,
      color: colors.gray,
    },
  };

  const FirstRow = () => (
    <SimplifiedDiv style={styles.innerBoxHolder}>
      <Text style={styles.innerBoxText}>Online help</Text>
      <Text style={styles.innerBoxText}>Contact us</Text>
      <Text style={styles.innerBoxText}>Order status</Text>
      <Text style={styles.innerBoxText}>Change location</Text>
      <Text style={styles.innerBoxText}>FAQ's</Text>
    </SimplifiedDiv>
  );

  const SecondRow = () => (
    <SimplifiedDiv style={styles.innerBoxHolder}>
      <Text style={styles.innerBoxText}>T-Shirts</Text>
      <Text style={styles.innerBoxText}>Mens</Text>
      <Text style={styles.innerBoxText}>Womens</Text>
      <Text style={styles.innerBoxText}>Gift cards</Text>
      <Text style={styles.innerBoxText}>Shoes</Text>
    </SimplifiedDiv>
  );

  const ThirdRow = () => (
    <SimplifiedDiv style={styles.innerBoxHolder}>
      <Text style={styles.innerBoxText}>Terms of use</Text>
      <Text style={styles.innerBoxText}>Privacy policy</Text>
      <Text style={styles.innerBoxText}>Refund policy</Text>
      <Text style={styles.innerBoxText}>Billing system</Text>
      <Text style={styles.innerBoxText}>Ticket system</Text>
    </SimplifiedDiv>
  );

  const FourthRow = () => (
    <SimplifiedDiv style={styles.innerBoxHolder}>
      <Text style={styles.innerBoxText}>Company information</Text>
      <Text style={styles.innerBoxText}>Careers</Text>
      <Text style={styles.innerBoxText}>Store location</Text>
      <Text style={styles.innerBoxText}>Affillate program</Text>
      <Text style={styles.innerBoxText}>Copyright</Text>
    </SimplifiedDiv>
  );

  return (
    <SimplifiedDiv style={styles.mainHolder}>
      <Grid container direction='row'>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text style={styles.headingText}>Service</Text>
            <FirstRow />
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text style={styles.headingText}>Quick shop</Text>
            <SecondRow />
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text style={styles.headingText}>Policies</Text>
            <ThirdRow />
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text style={styles.headingText}>About Shopper</Text>
            <FourthRow />
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}></Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default FooterLinkBar;
