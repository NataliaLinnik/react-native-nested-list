import React from "react";
import { ScrollView } from "react-native";
import NestedListItem from "./NestedListItem";

export default function NestedListView({
  items,
  updateActiveSection,
  isNodeActive,
  childrenPath,
  itemContent,
  opacity,
  itemKey,
  keyboardShouldPersistTaps,
}) {
  const renderItem = (item) => (
    <NestedListItem
      key={itemKey(item)}
      item={item}
      updateActiveSection={updateActiveSection}
      isNodeActive={isNodeActive}
      childrenPath={childrenPath}
      itemContent={itemContent}
      opacity={opacity}
      itemKey={itemKey}
    />
  );

  return (
    <ScrollView
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
    >
    {items && items.map((item) => renderItem(item))}</ScrollView>
  );
}
