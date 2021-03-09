// Siempre necesario
import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

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

export default createAppContainer(MealsNavigator);
