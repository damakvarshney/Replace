import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";
import AppButton from "../Component/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.container}
      source={require("../../assets/withoutLogo.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
        <Text style={styles.tagline}>|| Time to Replace Stuff||</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="blurGreen" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 100,
    left: 80,
  },
  logo: {
    width: 120,
    height: 120,
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export default WelcomeScreen;
