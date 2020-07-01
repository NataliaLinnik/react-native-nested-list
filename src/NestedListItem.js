import React from "react";
import { TouchableOpacity, View } from "react-native";

import NestedListView from "./NestedListView";

export default function Item({
  item,
  isNodeActive,
  updateActiveSection,
  childrenPath,
  itemContent,
  opacity,
  itemKey,
}) {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          updateActiveSection(item);
        }}
        activeOpacity={opacity}
      >
        <View>{itemContent(item)}</View>
      </TouchableOpacity>
      {item[childrenPath] && isNodeActive(item) && (
        <NestedListView
          items={item[childrenPath]}
          updateActiveSection={updateActiveSection}
          isNodeActive={isNodeActive}
          childrenPath={childrenPath}
          itemContent={itemContent}
          opacity={opacity}
          itemKey={itemKey}
        />
      )}
    </>
  );
}
