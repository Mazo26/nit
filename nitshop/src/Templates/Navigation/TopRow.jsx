import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontFamily, fontSize } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Text from "../../components/Text/Text";
import { getScreenWidth } from "../../util/helpers";

const SocialIcons = () => (
  <>
    <TwitterIcon
      style={{
        fontSize: fontSize.normal,
        color: colors.gray,
        margin: "0px 10px",
      }}
    />
    <InstagramIcon
      style={{
        fontSize: fontSize.normal,
        color: colors.gray,
        margin: "0px 10px",
      }}
    />
    <FacebookIcon
      style={{
        fontSize: fontSize.normal,
        color: colors.gray,
        margin: "0px 10px",
      }}
    />
  </>
);

const TopRow = () => {
  const screenWidth = getScreenWidth();

  const alignItemsInFirstDiv = screenWidth === "SM" ? "center" : "flex-start";
  const alignItemsInSecondDiv = screenWidth === "SM" ? "center" : "flex-end";
  const paddingInDiv = screenWidth === "SM" ? "10px 0px" : "0px";
  const topDivHeight = screenWidth === "SM" ? "auto" : "30px";
  const responsivePadding =
    screenWidth === "SM" ? "0px" : screenWidth === "MD" ? "0px" : "0px 10%";

  return (
    <CustomDiv
      bgColor={colors.secondColor}
      display='flex'
      width='100%'
      height={topDivHeight}
      padding={responsivePadding}
      border='0px'
      alignItems='center'
    >
      <Grid container direction='row'>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <CustomDiv
            display='flex'
            alignItems='center'
            justifyContent={alignItemsInFirstDiv}
            padding={paddingInDiv}
          >
            <PhoneIcon
              style={{
                fontSize: fontSize.normal,
              }}
            />
            <Text fontFamily={fontFamily.LatoRegular} fontSize={fontSize.small}>
              +38163333333
            </Text>
            <CustomDiv
              display='flex'
              alignItems='center'
              margin='0px 0px 0px 15px'
            >
              <EmailIcon
                style={{
                  fontSize: fontSize.normal,
                }}
              />
              <Text
                fontFamily={fontFamily.LatoRegular}
                fontSize={fontSize.small}
              >
                info@mail.com
              </Text>
            </CustomDiv>
          </CustomDiv>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CustomDiv
            display='flex'
            alignItems='center'
            justifyContent={alignItemsInSecondDiv}
            padding={paddingInDiv}
          >
            <SocialIcons />
          </CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default TopRow;
