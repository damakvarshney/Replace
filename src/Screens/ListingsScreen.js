import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../Component/Screen";
import { FlatList } from "react-native-gesture-handler";
import Card from "../Component/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Watch for Sale",
    price: 1500,
    image: require("../../assets/watch.jpg"),
  },
  {
    id: 2,
    title: "Dinning table for Sale",
    price: 9999,
    image: require("../../assets/diningTable.jpg"),
  },
  {
    id: 3,
    title: "Makeup Kit for Sale",
    price: 750,
    image: require("../../assets/makeup_kit.jpg"),
  },
  {
    id: 4,
    title: "Table lamp for Sale",
    price: 200,
    image: require("../../assets/tableLamp.png"),
  },
  {
    id: 5,
    title: "Jewelry lamp for Sale",
    price: 950,
    image: require("../../assets/jewwlery.jpg"),
  },
];

const ListingsScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 10,
  },
});
export default ListingsScreen;
