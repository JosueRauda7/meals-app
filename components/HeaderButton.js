import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.tertiaryColor}
      {...props}
    />
  );
};

export default CustomHeaderButton;
