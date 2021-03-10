import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const MealDetailScreen = (props) => {
  const idMeal = props.navigation.getParam("mealId");
  const meal = MEALS.find((meal) => meal.id === idMeal);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle='light-content' backgroundColor='#c60034' />
      <View style={styles.header}>
        <ImageBackground style={styles.bgImage} source={{ uri: meal.imageUrl }}>
          <Text style={styles.title}>{meal.title}</Text>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <View style={styles.tags}>
          <ScrollView horizontal>
            <Text style={styles.tag}>{meal.duration}m</Text>
            <Text style={styles.tag}>{meal.affordability}</Text>
            <Text style={styles.tag}>{meal.complexity}</Text>
            {meal.isVegan && <Text style={styles.tag}>Is Vegan</Text>}
            {meal.isGlutenFree && (
              <Text style={styles.tag}>Is Gluten Free</Text>
            )}
          </ScrollView>
        </View>
        <Text style={styles.h2}>Ingredients</Text>
        <Text style={styles.text}>
          {meal.ingredients.map((ingredient, index) => (
            <Text key={index}>{`- ${ingredient}.\n`}</Text>
          ))}
        </Text>
        <Text style={styles.h2}>Steps</Text>
        <Text style={styles.text}>
          {meal.steps.map((step, index) => (
            <Text key={index}>{`${index + 1}-) ${step}\n`}</Text>
          ))}
        </Text>
      </View>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const idMeal = navigationData.navigation.getParam("mealId");
  const meal = MEALS.find((meal) => meal.id === idMeal);
  return {
    headerTitle: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite Unmarked'
          iconName='ios-star'
          onPress={() => {
            console.log("Marcado como favorito");
          }}
        />
        {/* <Item
          title='Favorite Marked'
          iconName='ios-star-outline'
          onPress={() => {
            console.log("Marcado como favorito");
          }}
        /> */}
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.accentColor,
  },
  body: {
    flex: 3,
    paddingVertical: 9,
    paddingHorizontal: 9,
    width: "100%",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    color: "white",
    paddingHorizontal: 10,
    textShadowColor: "rgba(0,0,0,0.7)",
    elevation: 4,
    textShadowRadius: 8,
    textShadowOffset: {
      height: 2,
      width: 2,
    },
  },
  h2: {
    textAlign: "left",
    fontFamily: "open-sans-bold",
    fontSize: 24,
    marginBottom: 5,
  },
  tags: {
    flexDirection: "row",
  },
  tag: {
    backgroundColor: "#54e346",
    borderColor: "black",
    borderWidth: 0.5,
    fontFamily: "open-sans-bold",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "black",
    borderRadius: 50,
    marginHorizontal: 3,
    marginVertical: 3,
    marginBottom: 7,
  },
  text: {
    fontSize: 15,
  },
});

export default MealDetailScreen;
