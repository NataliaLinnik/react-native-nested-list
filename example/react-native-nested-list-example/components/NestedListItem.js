import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import { ItemListView } from "./NestedList";

export default function Item({ item, isNodeActive, updateActiveSection }) {
  function getColorForHeader() {
    if (item.isLastElement) {
      return getColor(item.subject.name, 3);
    }
    if (isNodeActive(item)) {
      return getColor(item.subject.name, 4);
    }
    // 25 for opacity, 40 == 25% in hex
    return getColor(item.subject.name, 4, 40);
  }

  function getIconName() {
    return isNodeActive(item) ? "expand-more" : "navigate-next";
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          updateActiveSection(item);
        }}
        style={{
          ...styles.headerComponent,
          backgroundColor: getColorForHeader(),
        }}
      >
        <Text style={{ ...styles.itemText, marginLeft: 8 * item.itemLevel }}>
          {item.topic}
        </Text>
        {!item.isLastElement && (
          <Icon
            name={getIconName()}
            size={24}
            color={getColor(item.subject.name, 1)}
          />
        )}
      </TouchableOpacity>
      {item.children && isNodeActive(item) && (
        <ItemListView
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
    ...basicTextStyle,
    color: "#5A5A5A",
    fontSize: 14,
    width: "80%",
  },
});
