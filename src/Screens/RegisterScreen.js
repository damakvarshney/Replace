import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import colors from "../config/colors";
import AppText from "../Component/AppText";
import Screen from "../Component/Screen";
import { AppForm, AppFormField, SubmitButton } from "../Component/forms";
import ErrorMessage from "./../Component/forms/ErrorMessage";
import useApi from "../hooks/useApi";
import useAuth from "../auth/useAuth";
import usersApi from "../api/users";
import authApi from "../api/auth";
import AppActivityIndicator from "./../Component/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  const [error, setError] = useState();

  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const { logIn } = useAuth();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log("Register Error", result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    logIn(authToken);
  };

  return (
    <>
      <AppActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppText style={styles.loginHeading}>Register</AppText>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
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
    </>
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
