import React from "react";
import { View, StyleSheet } from "react-native";
import ListingEditScreen from "./src/Screens/ListingEditScreen";
import Screen from "./src/Component/Screen";

const App = () => {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
