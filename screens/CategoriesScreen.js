import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  // Componente dentro para obtener props de navegación
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: Colors.tertiaryColor,
  },
});

export default CategoriesScreen;
