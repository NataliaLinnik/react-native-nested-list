import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import NestedListView from "./NestedListView";

export default function Item({ item, isNodeActive, updateActiveSection }) {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          updateActiveSection(item);
        }}
        style={{
          ...styles.headerComponent,
          backgroundColor: "grey",
        }}
      >
        <Text style={{ ...styles.itemText, marginLeft: 8 }}>{item.topic}</Text>
        {!item.isLastElement && (
          <Icon name={"expand-more"} size={24} color={"red"} />
        )}
      </TouchableOpacity>
      {item.children && isNodeActive(item) && (
        <NestedListView
          items={item.children}
          updateActiveSection={updateActiveSection}
          isNodeActive={isNodeActive}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  headerComponent: {
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    justifyContent: "space-between",
    marginVertical: 1,
    paddingHorizontal: 15,
  },
  itemText: {
    color: "black",
    fontSize: 14,
    width: "80%",
  },
});
