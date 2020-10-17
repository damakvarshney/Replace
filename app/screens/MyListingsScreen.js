import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "./../components/AppButton";
import AppActivityIndicator from "./../components/ActivityIndicator";
import useApi from "./../hooks/useApi";

const MyListingsScreen = ({ navigation }) => {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getMyListings
  );

  console.log(listings.length);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <View style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listings) => listings.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    paddingHorizontal: 10,
    paddingTop: 7,
  },
});
export default MyListingsScreen;
