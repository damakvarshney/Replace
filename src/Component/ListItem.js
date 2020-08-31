import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../Component/AppText/AppText";

const ListItem = ({ title, listing, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.userContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{listing}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  userContainer: {
    padding: 5,
    flexDirection: "column",
  },
  title: {
    marginBottom: 7,
    fontWeight: "400",
  },
  subtitle: {
    color: colors.medium,
    fontWeight: "100",
  },
});

export default ListItem;
