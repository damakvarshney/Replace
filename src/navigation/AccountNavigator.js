import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
import AccountScreen from "./../Screens/AccountScreen";
import MessagesScreen from "./../Screens/MessagesScreen";

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: colors.white,
      headerStyle: { backgroundColor: colors.dodgerBlue },
      title: "Replace",
    }}
  >
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
