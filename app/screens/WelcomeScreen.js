import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.container}
      source={require("../assets/withoutLogo.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/circleIcon.png")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="blurGreen"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "flex-end",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
  },
  buttonContainer: {
    flex: 1,
    padding: 20,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});

export default WelcomeScreen;
