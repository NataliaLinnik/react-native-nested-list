import React from "react";
import { ScrollView } from "react-native";
import Item from "./NestedListItem";

export default function ItemListView({
  items,
  updateActiveSection,
  isNodeActive,
}) {
  const renderItem = (item) => (
    <Item
      key={item.id}
      item={item}
      updateActiveSection={updateActiveSection}
      isNodeActive={isNodeActive}
    />
  );
  return (
    <ScrollView>{items && items.map((item) => renderItem(item))}</ScrollView>
  );
}
