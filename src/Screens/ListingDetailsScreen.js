import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../Component/AppText/AppText";
import ListItem from "../Component/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/tableLamp.png")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Lamp for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <ListItem
          image={require("../../assets/person.jpg")}
          title="Kelly"
          subtitle="5 listings"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontWeight: "400",
  },
  price: {
    color: colors.secondary,
    fontWeight: "100",
  },
});

export default ListingDetailsScreen;
