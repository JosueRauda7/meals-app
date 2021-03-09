import React from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle='light-content' backgroundColor='#c60034' />
      <Text>The Maeal Detail Screen!</Text>
      <Button
        title='Regresar a Categorias'
        onPress={() => {
          props.navigation.popToTop(); //Regresar a screen principal
        }}
      />
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

export default MealDetailScreen;
