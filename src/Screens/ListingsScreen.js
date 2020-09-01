import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../Component/Screen";
import { FlatList } from "react-native-gesture-handler";
import Card from "../Component/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Table Lamp for Sale",
    price: 100,
    image: require("../../assets/fullImage.jpg"),
  },
  {
    id: 2,
    title: "Dinning table for Sale",
    price: 1000,
    image: require("../../assets/diningTable.jpg"),
  },
];

const ListingsScreen = (props) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subtitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
