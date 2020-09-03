import React, { useState } from "react";
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import { View, StyleSheet, Picker } from "react-native";
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
import { TextInput } from "react-native-gesture-handler";
import AppTextInput from "./src/Component/AppTextInput";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppPicker from "./src/Component/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras ", value: 3 },
];
export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
