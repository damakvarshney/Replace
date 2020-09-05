import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = ({ onPress, item }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    padding: 20,
    alignItems: "center",
    alignContent: "center",
    width: "33%",
  },
  label: {
    textAlign: "center",
  },
});

export default CategoryPickerItem;
