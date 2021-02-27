import React from "react";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  // Recibiendo parámetros de la navegación
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => catId === cat.id);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle='light-content' backgroundColor='#c60034' />
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Ver Detalles'
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
          });
        }}
      />
      <Button
        title='Regresar'
        onPress={() => {
          // props.navigation.goBack();
          props.navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => catId === cat.id);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
