import React from "react";
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import { View, StyleSheet } from "react-native";
import colors from "./src/config/colors";
import Card from "./src/Component/Card";
import ListingDetailsScreen from "./src/Screens/ListingDetailsScreen";
import ListItem from "./src/Component/ListItem";
import ViewImageScreen from "./src/Screens/ViewImageScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ViewImageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
