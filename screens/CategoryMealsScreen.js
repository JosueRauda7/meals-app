import React from "react";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle='light-content' backgroundColor='#FA003F' />
      <Text>The category meals Screen!</Text>
      <Button
        title='Ver Detalles'
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
          });
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

export default CategoryMealsScreen;
