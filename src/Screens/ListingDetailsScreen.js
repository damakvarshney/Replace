import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../Component/AppText";
import ListItem from "../Component/lists/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>Rs {listing.price}</AppText>
        <ListItem
          image={require("../../assets/person.jpg")}
          title="Kelly"
          subtitle="5 listings"
          materialIconName="chevron-right"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    width: "90%",
    height: 300,
    margin: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  detailsContainer: {
    marginHorizontal: 20,
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
