import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";

const TopRow = () => {
  return (
    <CustomDiv
      bgColor={colors.secondColor}
      width='100%'
      height='30px'
      padding='0px 5%'
      border='0px'
    >
      <Grid container direction='row'>
        <Grid item md={6} lg={6} spacing={0}>
          <CustomDiv display='flex' alignItems='center'>
            <PhoneIcon
              style={{
                fontSize: fontSize.normal,
              }}
            />
            <p>+38163333333</p>
          </CustomDiv>
        </Grid>
        <Grid item md={6} lg={6} spacing={0}>
          <CustomDiv width='50%' border='0px' bgColor='inherit'></CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default TopRow;
