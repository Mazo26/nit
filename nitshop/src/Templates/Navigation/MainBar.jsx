import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import Logo from "../../assets/images/logo.png";
import Text from "../../components/Text/Text";
import { colors, fontSize, fontFamily } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";

import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockIcon from "@mui/icons-material/Lock";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Link } from "react-router-dom";

const iconStyle = {
  fontSize: fontSize.medium,
  color: colors.gray,
};

const MainBar = () => {
  const screenWidth = getScreenWidth();

  const rightMenuMargin = screenWidth === "SM" ? "20px 5px" : "0px";
  const rightMenuJustify = screenWidth === "SM" ? "flex-start" : "flex-end";
  const rightmenuItemsMargin = screenWidth === "SM" ? "0px 5px" : "0px 10px";

  const RightMenu = () => (
    <CustomDiv
      display='flex'
      alignItems='center'
      justifyContent={rightMenuJustify}
      width='100%'
      height='100%'
      margin={rightMenuMargin}
    >
      <CustomDiv display='flex' margin={rightmenuItemsMargin}>
        <PersonIcon style={iconStyle} />
        <Text
          fontFamily={fontFamily.LatoRegular}
          fontSize={fontSize.smallPlus}
          color={colors.gray}
        >
          Account
        </Text>
      </CustomDiv>
      <CustomDiv display='flex' margin={rightmenuItemsMargin}>
        <StarIcon style={iconStyle} />
        <Text
          fontFamily={fontFamily.LatoRegular}
          fontSize={fontSize.smallPlus}
          color={colors.gray}
        >
          Wishlist
        </Text>
      </CustomDiv>
      <CustomDiv display='flex' margin={rightmenuItemsMargin}>
        <LocationSearchingIcon style={iconStyle} />
        <Text
          fontFamily={fontFamily.LatoRegular}
          fontSize={fontSize.smallPlus}
          color={colors.gray}
        >
          Checkout
        </Text>
      </CustomDiv>
      <CustomDiv display='flex' margin={rightmenuItemsMargin}>
        <ShoppingCartIcon style={iconStyle} />
        <Link to='/cart'>
          <Text
            fontFamily={fontFamily.LatoRegular}
            fontSize={fontSize.smallPlus}
            color={colors.gray}
          >
            Cart
          </Text>
        </Link>
      </CustomDiv>
      <CustomDiv display='flex' margin={rightmenuItemsMargin}>
        <LockIcon style={iconStyle} />
        <Text
          fontFamily={fontFamily.LatoRegular}
          fontSize={fontSize.smallPlus}
          color={colors.gray}
        >
          <Link to='/login'>Login</Link>
        </Text>
      </CustomDiv>
    </CustomDiv>
  );

  const alignLogo = screenWidth === "SM" ? "center" : "left";
  const mainDivPadding = screenWidth === "SM" ? "20px 0px" : "20px 10% 10px";

  return (
    <CustomDiv
      bgColor='white'
      display='flex'
      width='100%'
      height='auto'
      padding={mainDivPadding}
      border='0px'
    >
      <Grid container direction='row'>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <SimplifiedDiv
            style={{
              textAlign: alignLogo,
            }}
          >
            <img
              src={Logo}
              alt='Logo'
              style={{
                width: 140,
                height: "auto",
              }}
            />
          </SimplifiedDiv>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <RightMenu />
        </Grid>
        <CustomDiv
          width='100%'
          height='2px'
          margin='20px 0px'
          borderBottom='0.2px solid #b3b1b1'
        />
      </Grid>
    </CustomDiv>
  );
};

export default MainBar;
