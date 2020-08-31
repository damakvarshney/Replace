import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
      <Image
        source={require("../../assets/fullImage.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: colors.black,
  },
  closeButton: {
    position: "absolute",
    top: 50,
    left: 10,
  },
  deleteButton: {
    position: "absolute",
    top: 50,
    right: 10,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
