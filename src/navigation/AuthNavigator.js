import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import React from "react";
import RegisterScreen from "../Screens/RegisterScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: colors.white,
      headerStyle: { backgroundColor: colors.dodgerBlue },
      title: "Replace",
    }}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigation;
