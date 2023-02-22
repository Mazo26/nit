import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import Text from "../../components/Text/Text";
import { colors, fontSize } from "../../util/theme";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchInput from "../../components/SearchInput/SearchInput";

const LinkBar = () => {
  return (
    <CustomDiv display='flex' padding='0px 10%' width='100%'>
      <Grid container direction='row'>
        <Grid item sm={6} md={6} lg={6}>
          <CustomDiv display='flex' alignItems='center' gap='30px'>
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
          </CustomDiv>
        </Grid>
        <Grid item sm={6} md={6} lg={6}>
          <CustomDiv
            display='flex'
            alignItems='center'
            justifyContent='flex-end'
          >
            <SearchInput
              type='text'
              width='200px'
              height='25px'
              borderBottom='1px solid'
              borderColor={colors.gray}
            />
          </CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default LinkBar;
