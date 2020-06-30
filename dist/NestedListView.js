import React from "react";
import { ScrollView } from "react-native";
import NestedListItem from "./NestedListItem";

export default function NestedListView({
  items,
  updateActiveSection,
  isNodeActive,
}) {
  const renderItem = (item) => (
    <NestedListItem
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
