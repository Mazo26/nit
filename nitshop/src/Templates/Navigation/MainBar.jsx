import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import Logo from "../../assets/images/logo.png";
import Text from "../../components/Text/Text";
import { colors, fontSize } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";

import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockIcon from "@mui/icons-material/Lock";

const iconStyle = {
  fontSize: fontSize.medium,
  color: colors.gray,
};

const RightMenu = () => (
  <CustomDiv
    display='flex'
    alignItems='center'
    justifyContent='flex-end'
    height='100%'
  >
    <CustomDiv display='flex' margin='0px 10px'>
      <PersonIcon style={iconStyle} />
      <Text fontSize={fontSize.smallPlus} color={colors.gray}>
        Account
      </Text>
    </CustomDiv>
    <CustomDiv display='flex' margin='0px 10px'>
      <StarIcon style={iconStyle} />
      <Text fontSize={fontSize.smallPlus} color={colors.gray}>
        Wishlist
      </Text>
    </CustomDiv>
    <CustomDiv display='flex' margin='0px 10px'>
      <LocationSearchingIcon style={iconStyle} />
      <Text fontSize={fontSize.smallPlus} color={colors.gray}>
        Checkout
      </Text>
    </CustomDiv>
    <CustomDiv display='flex' margin='0px 10px'>
      <ShoppingCartIcon style={iconStyle} />
      <Text fontSize={fontSize.smallPlus} color={colors.gray}>
        Cart
      </Text>
    </CustomDiv>
    <CustomDiv display='flex' margin='0px 10px'>
      <LockIcon style={iconStyle} />
      <Text fontSize={fontSize.smallPlus} color={colors.gray}>
        Login
      </Text>
    </CustomDiv>
  </CustomDiv>
);

const MainBar = () => {
  return (
    <CustomDiv
      bgColor='white'
      display='flex'
      width='100%'
      height='auto'
      padding='20px 10%'
      border='0px'
    >
      <Grid container direction='row'>
        <Grid item md={6} lg={6}>
          <img
            src={Logo}
            alt='Logo'
            style={{
              width: 140,
              height: "auto",
            }}
          />
        </Grid>
        <Grid item md={6} lg={6}>
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
