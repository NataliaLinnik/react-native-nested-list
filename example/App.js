import React from "react";
import { Alert, StyleSheet, View, Text } from "react-native";

import listItems from "./assets/listItems.json";
import NestedList from "react-native-nested-list";

export default function Example() {
  const getColor = (level) => {
    switch (level) {
      case 0:
        return "#272640";
      case 1:
        return "#1b3a4b";
      case 2:
        return "#0b525b";
      case 3:
        return "#00787A";
    }
    return "";
  };

  const openAlert = (item) =>
    Alert.alert(
      "This is the last node!",
      "You pressed " + item.topic,
      [{ text: "OK", onPress: () => console.log("You pressed", item.topic) }],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <NestedList
        listItems={listItems}
        listWrapperStyle={styles.listWrapper}
        childrenPath={"children"}
        itemKey={(item) => item.id}
        itemContent={(item) => (
          <View
            style={{
              ...styles.itemWrapper,
              backgroundColor: getColor(item.itemLevel),
            }}
          >
            <Text
              style={{ ...styles.itemText, paddingLeft: item.itemLevel * 16 }}
            >
              {item.topic}
            </Text>
          </View>
        )}
        onItemPressed={(item) => console.log(item)}
        onLastItemPressed={(item) => openAlert(item)}
        opacity={0.8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemWrapper: {
    alignItems: "center",
    backgroundColor: "grey",
    flexDirection: "row",
    height: 48,
    justifyContent: "space-between",
    marginVertical: 1,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  listWrapper: {
    flex: 1,
    marginVertical: 48,
  },
  itemText: {
    color: "white",
    fontSize: 14,
    marginLeft: 8,
    width: "100%",
  },
});
