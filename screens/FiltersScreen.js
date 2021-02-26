import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle='light-content' backgroundColor='#FA003F' />
      <Text>The Filters Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
