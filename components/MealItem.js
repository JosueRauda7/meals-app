import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItem}>
      <TouchableCmp onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealHeader, ...styles.mealRow }}>
            {/* <ImageBackground source={require('...')} /> */}
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: props.image }}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealDetail, ...styles.mealRow }}>
            <Text style={styles.textDetails}>{props.duration}m</Text>
            <Text style={styles.textDetails}>
              {props.complexity.toUpperCase()}
            </Text>
            <Text style={styles.textDetails}>
              {props.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#86b91e",
    borderRadius: 9,
    overflow: "hidden",
    marginVertical: 9,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textDetails: {
    color: "white",
  },
});

export default MealItem;
