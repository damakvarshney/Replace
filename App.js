import React from "react";
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import { View, StyleSheet } from "react-native";
import colors from "./src/config/colors";
import Card from "./src/Component/Card";
import ListingDetailsScreen from "./src/Screens/ListingDetailsScreen";
import ListItem from "./src/Component/ListItem";
import ViewImageScreen from "./src/Screens/ViewImageScreen";
import MessagesScreen from "./src/Screens/MessagesScreen";
import Screen from "./src/Component/Screen";
import Icon from "./src/Component/Icon";
import AccountScreen from "./src/Screens/AccountScreen";
import ListingsScreen from "./src/Screens/ListingsScreen";
export default function App() {
  return (
    <Screen>
      <ListingsScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
