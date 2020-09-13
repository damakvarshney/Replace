import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Screen from "../Component/Screen";
import { FlatList } from "react-native-gesture-handler";
import Card from "../Component/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../Component/AppText";
import AppButton from "./../Component/AppButton";
import AppActivityIndicator from "./../Component/ActivityIndicator";
import useApi from "./../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <AppActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.price}
            imageUrl={item.images[0].thumbnailUrl}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 10,
  },
});
export default ListingsScreen;
