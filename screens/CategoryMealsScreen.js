import React from "react";
import { View, StyleSheet, StatusBar, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: itemData.item.id,
              // title: itemData.item.title,
              // duration: itemData.item.duration,
              // complexity: itemData.item.complexity,
              // affordability: itemData.item.affordability,
              // ingredients: itemData.item.ingredients,
              // image: itemData.item.imageUrl,
              // steps: itemData.item.steps,
              // isGlutenFree: itemData.item.isGlutenFree,
              // isVegan: itemData.item.isVegan,
              // isLactoseFree: itemData.item.isLactoseFree,
              // isVegetarian: itemData.item.isVegetarian,
            },
          });
        }}
      />
    );
  };

  // Recibiendo parámetros de la navegación
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <StatusBar barStyle='light-content' backgroundColor='#c60034' />
      <FlatList
        style={{ width: "90%", marginVertical: 15 }}
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
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
