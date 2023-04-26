import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import { colors, fontFamily, fontSize } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers.js";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  navBar: {
    display: "flex",
    gap: "30px",
    height: "40px",
    alignItems: "center",
  },
  hamburgerButton: {
    display: "grid",
    border: "1px solid",
    borderColor: colors.accentColor,
    borderRadius: "5px",
    width: "38px",
    height: "38px",
    alignContent: "center",
    placeContent: "center",
    backgroundColor: "white",
  },
  linkMenu: {
    backgroundColor: colors.gray,
    textAlign: "left",
    padding: "10px 20px",
    margin: "15px 0px",
  },
  links: {
    padding: "10px 0px",
    fontSize: fontSize.normal,
    color: colors.white,
    fontFamily: fontFamily.LatoItalic,
  },
  linksLG: {
    fontFamily: fontFamily.LatoRegular,
    fontSize: fontSize.normal,
    color: colors.gray,
  },
};

const LinkBar = () => {
  const screenWidth = getScreenWidth();

  const [isOpen, setIsOpen] = useState(false);

  const LinkBarLG = () => (
    <CustomDiv display='flex' padding='0px 10%' width='100%'>
      <Grid container direction='row'>
        <Grid item sm={6} md={6} lg={6}>
          <SimplifiedDiv style={styles.navBar}>
            <Link to='/' style={styles.linksLG}>
              Home
            </Link>
            <Link to='/shop' style={styles.linksLG}>
              Shop
            </Link>
            <Link to='/blog' style={styles.linksLG}>
              Blog
            </Link>
            <Link to='/about' style={styles.linksLG}>
              About
            </Link>
            <Link to='/contact' style={styles.linksLG}>
              Contact
            </Link>
          </SimplifiedDiv>
        </Grid>
        <Grid item sm={6} md={6} lg={6}>
          <CustomDiv
            display='flex'
            alignItems='center'
            justifyContent='flex-end'
          >
            <TextField
              size='small'
              label='Search'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );

  const LinkBarSM = ({ open }) => (
    <SimplifiedDiv
      style={{
        display: "block",
        padding: "0px 10px",
        width: "100%",
      }}
    >
      <SimplifiedDiv
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid item xs={6} sm={6} md={6}>
          <TextField
            size='small'
            label='Search'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <SimplifiedDiv
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={styles.hamburgerButton}
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon
                style={{
                  color: colors.accentColor,
                }}
              />
            </button>
          </SimplifiedDiv>
        </Grid>
      </SimplifiedDiv>
      {isOpen && (
        <SimplifiedDiv style={styles.linkMenu}>
          <Text style={styles.links}>Home</Text>
          <Text style={styles.links}>Shop</Text>
          <Text style={styles.links}>Blog</Text>
          <Text style={styles.links}>About</Text>
          <Text style={styles.links}>Contact</Text>
        </SimplifiedDiv>
      )}
    </SimplifiedDiv>
  );

  return screenWidth === "SM" || screenWidth === "MD" ? (
    <LinkBarSM />
  ) : (
    <LinkBarLG />
  );
};

export default LinkBar;
