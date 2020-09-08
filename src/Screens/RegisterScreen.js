import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import colors from "../config/colors";
import AppText from "../Component/AppText";
import Screen from "../Component/Screen";
import { AppForm, AppFormField, SubmitButton } from "../Component/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.loginHeading}>Register</AppText>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          icon="account"
          name="name"
          placeholder="Name"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  loginHeading: {
    fontSize: 50,
    color: colors.medium,
    alignSelf: "flex-start",
    paddingVertical: 60,
  },
});
