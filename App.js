import React from "react";
import { StyleSheet, View, Text } from "react-native";

import listItems from "./assets/listItems.json";
import NestedList from "./dist/NestedList";

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
    marginVertical: 48,
  },
});
