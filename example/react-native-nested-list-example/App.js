import React from "react";
import { StyleSheet, Text, View } from "react-native";

import listItems from "./assets/data/listItems.json";
import NestedList from "react-native-nested-list";

export default function App() {
  return (
    <View style={styles.container}>
      <NestedList listItems={listItems} listWrapperStyle={styles.listWrapper} />
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
  listWrapper: {
    flex: 1,
    paddingHorizontal: 40,
  },
});
