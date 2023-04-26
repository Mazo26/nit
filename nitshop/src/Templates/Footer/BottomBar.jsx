import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors, fontSize } from "../../util/theme";
import Text from "../../components/Text/Text";

const BottomBar = () => {
  const styles = {
    mainDiv: {
      backgroundColor: colors.lightGray,
      height: "30px",
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 160px",
      alignItems: "center",
    },
    innerText: {
      color: colors.white,
      fontSize: fontSize.optimal,
    },
  };

  return (
    <SimplifiedDiv style={styles.mainDiv}>
      <Text style={styles.innerText}>
        Copyright © 2023 CENTAR NIT. All rights reserved.
      </Text>
      <Text style={styles.innerText}>Made by NIT EKIPA</Text>
    </SimplifiedDiv>
  );
};

export default BottomBar;
