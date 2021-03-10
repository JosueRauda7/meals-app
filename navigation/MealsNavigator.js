import React from "react";
import { Platform } from "react-native";
// Siempre necesario
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
// Para IOS
import { createBottomTabNavigator } from "react-navigation-tabs";
// Para Android
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const MealsNavigator = createStackNavigator(
  {
    // Diferentes Screens
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "Categorias",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {
        title: "Comidas",
      },
    },
    MealDetails: {
      screen: MealDetailScreen,
      navigationOptions: {
        title: "Detalles de comida",
      },
    },
  },
  {
    // mode: "modal",
    // initialRouteName: "Categories",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#fa003f",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

const tabScreenConfig = {
  Comidas: {
    screen: MealsNavigator,
    navigationOptions: {
      // Solo es válido esto cuando es usado en otro navigator
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-restaurant' size={24} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favoritos: {
    screen: FavoritesScreen,
    navigationOptions: {
      // Solo es válido esto cuando es usado en otro navigator
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={24} color={tabInfo.tintColor} />;
      },
      tabBarLabel: "¡Favoritos!",
      tabBarColor: "#ffbe0f",
    },
  },
};

// Haciendo menú de tabs abajo de la pantalla
const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeBackgroundColor: "#e82056",
          // activeBackgroundColor: Colors.primaryColor,
          activeTintColor: Colors.tertiaryColor,
          // activeTintColor: "white",
          inactiveBackgroundColor: "#e82056",
          inactiveTintColor: "white",
        },
      });

export default createAppContainer(MealsFavTabNavigator);
