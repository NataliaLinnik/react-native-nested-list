import React, { useState } from "react";
import { StyleSheet, View, YellowBox } from "react-native";
import NestedListView from "./NestedListView";

YellowBox.ignoreWarnings(["Require cycle:"]);

export default function NestedList({
  listItems,
  listWrapperStyle,
  getChildrenName,
}) {
  const [activeSections, setActiveSections] = useState([]);

  const updateActiveSection = (item) => {
    if (!item.children) {
      console.log("THIS IS THE LAST ELEMENT");
      // ADD AN INPUT FUNCTION? like "onClickLastElement"
    } else {
      let newSelections = [...activeSections];
      const activeElement = isNodeActive(item);
      if (activeElement) {
        newSelections = [
          ...searchForChildrenToRemove(newSelections, activeElement),
        ];
      } else {
        newSelections.push(item);
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

  function isNodeActive(item) {
    return activeSections.find((element) => element.id === item.id);
  }

  return (
    <>
      {listItems && (
        <View style={listWrapperStyle}>
          <NestedListView
            items={listItems}
            updateActiveSection={updateActiveSection}
            isNodeActive={isNodeActive}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
