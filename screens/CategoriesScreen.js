import React from "react";
import { View, StyleSheet, FlatList, StatusBar } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  // Componente dentro para obtener props de navegación
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View>
      <StatusBar barStyle='light-content' backgroundColor='#c60034' />
      <FlatList
        keyExtractor={(item, index) => item.id}
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
      />
    </View>
  );
  // return (
  //   <View style={styles.screen}>
  //     <StatusBar barStyle='light-content' backgroundColor='#FA003F' />
  //     <Text>The categories Screen!</Text>
  //     <Button
  //       title='Go to Meals!'
  //       onPress={() => {
  //         props.navigation.navigate({ routeName: "CategoryMeals" });
  //         // props.navigation.replace("CategoryMeals"); // Sin opción de retroceder, ej. login
  //         // props.navigation.push("CategoryMeals"); // Bueno cuando es manejo de archivos
  //       }}
  //     />
  //   </View>
  // );
};

// Configurando el header de navigation
CategoriesScreen.navigationOptions = {
  headerTitle: "Categorias de comida",
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
});

export default CategoriesScreen;
