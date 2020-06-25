import React from "react";
import NestedList from "./NestedList";

export default function Item({
  item,
  isNodeActive,
  updateActiveSection,
  itemContent,
}) {
  return (
    <>
      {itemContent}
      {item.children && isNodeActive(item) && (
        <NestedList
          items={item.children}
          updateActiveSection={updateActiveSection}
          isNodeActive={isNodeActive}
          itemContent={children}
        />
      )}
    </>
  );
}
