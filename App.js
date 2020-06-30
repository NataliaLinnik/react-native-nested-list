import React from "react";
import { StyleSheet, View, Text } from "react-native";

import listItems from "./assets/listItems.json";
import NestedList from "./dist/NestedList";

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
        onItemPressed={(item) => {}}
        onLastItemPressed={(item) => {
          console.log("LAST ELEMENT");
        }}
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
