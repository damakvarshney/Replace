import React from "react";
import { StyleSheet } from "react-native";

import LoginScreen from "./src/Screens/LoginScreen";
import ListingEditScreen from "./src/Screens/ListingEditScreen";
import MessagesScreen from "./src/Screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
