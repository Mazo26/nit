import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import { colors, fontSize } from "../../util/theme";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const styles = {
  navBar: {
    display: "flex",
    gap: "30px",
    height: "40px",
    alignItems: "center",
  },
};

const LinkBar = () => {
  return (
    <CustomDiv display='flex' padding='0px 10%' width='100%'>
      <Grid container direction='row'>
        <Grid item sm={6} md={6} lg={6}>
          <SimplifiedDiv style={styles.navBar}>
            <Text fontSize={fontSize.normal} color={colors.gray}>
              Home
            </Text>
            <Text fontSize={fontSize.normal} color={colors.gray}>
              Shop
            </Text>
            <Text fontSize={fontSize.normal} color={colors.gray}>
              Blog
            </Text>
            <Text fontSize={fontSize.normal} color={colors.gray}>
              About
            </Text>
            <Text fontSize={fontSize.normal} color={colors.gray}>
              Kontakt
            </Text>
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
};

export default LinkBar;
