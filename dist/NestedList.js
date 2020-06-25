import React, { useState } from "react";
import { StyleSheet, View, YellowBox } from "react-native";
import ListView from "./ItemListView";

YellowBox.ignoreWarnings(["Require cycle:"]);

export default function NestedList({ listItems, listWrapperStyle }) {
  const [activeSections, setActiveSections] = useState([]);

  const updateActiveSection = (node) => {
    if (node.isLastElement) {
      // ADD AN INPUT FUNCTION? like "onClickLastElement"
    } else {
      let newSelections = [...activeSections];
      const activeElement = isNodeActive(node);
      if (activeElement) {
        newSelections = [
          ...searchForChildrenToRemove(newSelections, activeElement),
        ];
      } else {
        newSelections.push(node);
      }
      setActiveSections(newSelections);
    }
  };

  function searchForChildrenToRemove(newSelections, elementToRemove) {
    var index = newSelections.indexOf(elementToRemove);
    if (index !== -1) {
      newSelections.splice(index, 1);
      if (newSelections.length && elementToRemove.children) {
        elementToRemove.children.forEach((child) => {
          if (isNodeActive(child)) {
            searchForChildrenToRemove(newSelections, child);
          }
        });
      }
    }
    return newSelections;
  }

  function isNodeActive(node) {
    return activeSections.find(
      (element) => element.containerId === node.containerId
    );
  }

  return (
    <>
      {listItems && (
        <View style={listWrapperStyle}>
          <ListView
            items={listItems}
            updateActiveSection={updateActiveSection}
            isNodeActive={isNodeActive}
            itemContent={children}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
