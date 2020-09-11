# @natalia.li/react-native-nested-list

A React Native UI component for creating a customizable list with N levels of nesting.

## Visuals

It works perfectly with lists of any size, including those thay cointain many items.

<img src="demo/nested-list_example.gif" width="250" alt="Nested List Demo"/>

You can find the code for this preview in /examples folder.

## Setup

To install this library use the package manager [npm](https://www.npmjs.com/)

```bash
npm i @natalia.li/react-native-nested-list
```

or [yarn](https://yarnpkg.com/)

```bash
yarn add @natalia.li/react-native-nested-list
```

## Usage

### Import NestedList

The NestedList should be imported in the file you want to use it in.

```javascript
import NestedList from "@natalia.li/react-native-nested-list";
```

### Define the list of items

You have to define the list of items you want to show. You have to put the children inside the nodes. The nested array can be named any way you'd like, but the path to the nested array inside the list must be defined in _childrenPath_ prop.

```javascript
const listItems = [
  {
    id: 1,
    topic: "Item 1",
    children: [
      {
        id: 11,
        topic: "Item 1.1",
        children: [
          {
            id: 111,
            topic: "Item 1.1.1",
          },
          {
            id: 112,
            topic: "Item 1.1.2",
          },
        ],
      },
      {
        id: 12,
        topic: "Item 1.2",
      },
    ],
  },
  {
    id: 2,
    topic: "Item 2",
    children: [
      {
        id: 21,
        topic: "Item 2.1",
        children: [
          {
            id: 211,
            topic: "Item 2.1.1",
          },
        ],
      },
    ],
  },
];
```

### Define NestedList

The NestedList Tag has to be defined with the required props.

```javascript
<NestedList
  listItems={listItems}
  childrenPath={"children"}
  itemKey={(item) => item.id}
  itemContent={(item) => (
    <View>
      <Text>{item.topic}</Text>
    </View>
  )}
/>
```

### A complete example

The following code show you an entire example with proper styling. How about you try it out? ;)

```javascript
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NestedList from "@natalia.li/react-native-nested-list";

const listItems = [
  {
    id: 1,
    topic: "Item 1",
    children: [
      {
        id: 11,
        topic: "Item 1.1",
        children: [
          {
            id: 111,
            topic: "Item 1.1.1",
          },
          {
            id: 112,
            topic: "Item 1.1.2",
          },
        ],
      },
      {
        id: 12,
        topic: "Item 1.2",
      },
    ],
  },
  {
    id: 2,
    topic: "Item 2",
    children: [
      {
        id: 21,
        topic: "Item 2.1",
        children: [
          {
            id: 211,
            topic: "Item 2.1.1",
          },
        ],
      },
    ],
  },
];

export default function NestedListExample() {
  return (
    <View style={styles.container}>
      <NestedList
        listItems={listItems}
        listWrapperStyle={styles.listWrapper}
        childrenPath={"children"}
        opacity={0.8}
        itemKey={(item) => item.id}
        onItemPressed={(item) => {
          console.log("AN ELEMENT WAS PRESSED", item.topic);
        }}
        onLastItemPressed={(item) => {
          console.log("LAST ELEMENT", item.topic);
        }}
        itemContent={(item) => (
          <View style={styles.itemWrapper}>
            <Text style={styles.itemText}>{item.topic}</Text>
          </View>
        )}
      />
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
  itemWrapper: {
    alignItems: "center",
    backgroundColor: "grey",
    flexDirection: "row",
    height: 48,
    justifyContent: "space-between",
    marginVertical: 1,
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },
  listWrapper: {
    flex: 1,
    marginVertical: 48,
  },
  itemText: {
    color: "black",
    fontSize: 14,
    marginLeft: 8,
    width: "100%",
  },
});
```

You can find another example in the /examples directory.

## Available props

| Name              | Type   | Default      | Required | Description                                                                                                                                    |
| ----------------- | ------ | ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| listItems         | array  | [ ]          | Y        | Array with data of nested items.                                                                                                               |
| listWrapperStyle  | any    | any          | N        | Global styling for a list container.                                                                                                           |
| childrenPath      | string | 'children'   | N        | Defines where the children of an item can be found.                                                                                            |
| itemKey           | func   | (item) => {} | Y        | Defines the UNIQUE id of each element.                                                                                                         |
| itemContent       | func   | node         | Y        | The item content with any elements you would like to include. Expects a function that returns a React element. Shown in examples above.        |
| onItemPressed     | func   | (item) => {} | N        | Called when an item is pressed.                                                                                                                |
| onLastItemPressed | func   | (item) => {} | N        | Called when an item without children is pressed.                                                                                               |
| opacity           | number | 0.2          | N        | Defines the opacity of an item on click. Accept values from 0.0 to 1.0 (see [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)) |

## Acknowledgements

Feedback and suggestions are welcome!

## License

[MIT](LICENSE)
