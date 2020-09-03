import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "../Component/AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.userContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.listing}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    alignSelf: "center",
  },
  userContainer: {
    padding: 5,
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    marginBottom: 7,
    fontWeight: "600",
  },
  listing: {
    color: colors.medium,
    fontWeight: "100",
  },
});

export default ListItem;
