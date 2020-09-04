import { StyleSheet } from "react-native";
import React from "react";

import * as Yup from "yup";

import AppText from "../Component/AppText";
import colors from "../config/colors";
import AppFormField from "../Component/forms/AppFormField";
import Screen from "../Component/Screen";
import SubmitButton from "../Component/forms/SubmitButton";
import AppForm from "../Component/forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password "),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.loginHeading}>Login</AppText>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          name="email"
          keyboardType="email-address"
          autoCapitalize="none"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          name="password"
          autoCapitalize="none"
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  loginHeading: {
    fontSize: 50,
    color: colors.medium,
    alignSelf: "flex-start",
    paddingVertical: 100,
  },
});

export default LoginScreen;
