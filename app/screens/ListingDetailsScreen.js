import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import { Image } from "react-native-expo-image-cache";
import Screen from "./../components/Screen";
import useAuth from "./../auth/useAuth";
import ContactSellerForm from "../components/ContactSellerForm";
import Constants from "expo-constants";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  const { user } = useAuth();

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      style={styles.container}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="dark"
        uri={listing.images[0].url}
      />

      <View style={styles.subContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>Rs {listing.price}</AppText>
        <ListItem
          image={require("../assets/user.png")}
          title={user.name}
          subtitle="2 Listings"
          materialIconName="chevron-right"
        />

        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  subContainer: {
    padding: 20,
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: 300,

    borderRadius: 10,
  },

  title: {
    marginBottom: 7,
    fontWeight: "400",
  },
  price: {
    color: colors.secondary,
    fontWeight: "100",
  },
});

export default ListingDetailsScreen;
