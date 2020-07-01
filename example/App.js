import React from "react";
import { StyleSheet, View, Text } from "react-native";

import listItems from "./assets/listItems.json";
import NestedList from "react-native-nested-list";

export default function App() {
  return (
    <View style={styles.container}>
      <NestedList
        listItems={listItems}
        listWrapperStyle={styles.listWrapper}
        childrenPath={"children"}
        itemKey={(item) => item.id}
        itemContent={(item) => (
          <View style={styles.itemWrapper}>
            <Text style={styles.itemText}>{item.topic}</Text>
          </View>
        )}
        onItemPressed={(item) => console.log(item.topic)}
        onLastItemPressed={(item) => console.log(item.id)}
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
  },
  listWrapper: {
    flex: 1,
    marginVertical: 48,
  },
  itemText: {
    color: "black",
    fontSize: 14,
    marginLeft: 8,
    width: "100%",
  },
});
