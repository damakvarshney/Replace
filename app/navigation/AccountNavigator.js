import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import colors from "../config/colors";
import MyListingsScreen from "./../screens/MyListingsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.dodgerBlue },
        headerTitle: "Account",
      }}
    />
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.dodgerBlue },
        headerTitle: "Messages",
      }}
    />
    <Stack.Screen
      name="MyListings"
      component={MyListingsScreen}
      options={{
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.dodgerBlue },
        headerTitle: "My Listings",
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
