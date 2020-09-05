import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ListItem from "../Component/lists/ListItem";
import Screen from "../Component/Screen";
import ListItemSeparator from "../Component/lists/ListItemSeparator";
import ListItemDeleteAction from "../Component/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Kelly Kapoor",
    description: "Hey! I am interested in this item... Whats your last price?",
    image: require("../../assets/person.jpg"),
  },
  {
    id: 2,
    title: "Rohan Mehra",
    description: "I received your package, Its Really Awesome",
    image: require("../../assets/person2.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    //Delete the message from messages
    //call the serve in future
    const newMessages = messages.filter(
      (singleMessage) => singleMessage.id !== message.id
    );
    setMessages(newMessages);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            materialIconName="chevron-right"
            title={item.title}
            subtitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log("you Clicked ")}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Kelly Kapoor",
              description:
                "Hey! I am interested in this item... Whats your last price?",
              image: require("../../assets/person.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
