import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "../components/lists/ListItem";
import { FlatList } from "react-native-gesture-handler";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "MyListings",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require("../assets/user.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        onPress={() => logOut()}
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
export default AccountScreen;
