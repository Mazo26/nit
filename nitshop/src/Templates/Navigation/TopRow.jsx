import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Text from "../../components/Text/Text";
import { getScreenWidth } from "../../util/helpers";

const TopRow = () => {
  const screenWidth = getScreenWidth();

  console.log(screenWidth);

  return (
    <CustomDiv
      bgColor={colors.secondColor}
      display='flex'
      width='100%'
      height='30px'
      padding='0px 5%'
      border='0px'
    >
      <Grid container direction='row'>
        <Grid item md={6} lg={6}>
          <CustomDiv display='flex' alignItems='center'>
            <PhoneIcon
              style={{
                fontSize: fontSize.normal,
              }}
            />
            <Text fontSize={fontSize.small}>+38163333333</Text>
            <CustomDiv
              display='flex'
              alignItems='center'
              margin='0px 0px 0px 5px'
            >
              <EmailIcon
                style={{
                  fontSize: fontSize.normal,
                }}
              />
              <Text fontSize={fontSize.small}>info@mail.com</Text>
            </CustomDiv>
          </CustomDiv>
        </Grid>
        <Grid item md={6} lg={6}>
          <CustomDiv
            display='flex'
            alignItems='center'
            justifyContent='flex-end'
            textAlign='right'
          >
            <TwitterIcon
              style={{
                fontSize: fontSize.normal,
                color: colors.gray,
              }}
            />
            <InstagramIcon
              style={{
                fontSize: fontSize.normal,
                color: colors.gray,
              }}
            />
            <FacebookIcon
              style={{
                fontSize: fontSize.normal,
                color: colors.gray,
              }}
            />
          </CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default TopRow;
