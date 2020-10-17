import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import colors from "../config/colors";

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
  </Stack.Navigator>
);

export default AccountNavigator;
