import { StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import AppText from "../Component/AppText";
import colors from "../config/colors";
import AppFormField from "../Component/forms/AppFormField";
import Screen from "../Component/Screen";
import SubmitButton from "../Component/forms/SubmitButton";
import AppForm from "../Component/forms/AppForm";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import ErrorMessage from "./../Component/forms/ErrorMessage";
import AppActivityIndicator from "../Component/ActivityIndicator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password "),
});

const LoginScreen = () => {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) {
      setLoginFailed(true);
    }
    setLoginFailed(false);
    logIn(result.data);
  };

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <AppText style={styles.loginHeading}>Login</AppText>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid email and/or password"
            visible={loginFailed}
          />
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
    </>
  );
};

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

export default LoginScreen;
