import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.dodgerBlue },
      }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.dodgerBlue },
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
