/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {
  WingBlank,
  WhiteSpace,
  Button,
  Provider,
} from "@ant-design/react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import { AmplifyTheme } from "aws-amplify-react-native";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import uuid from "uuid";
import { getItems, createItem, deleteItem, getItem } from "./utils/api";
import CreateModal from "./components/CreateModal";
import ItemList from "./components/ItemList";

Amplify.configure(awsconfig);

const MyButton = Object.assign({}, AmplifyTheme.button, {
  backgroundColor: "#1890ff"
});
const MyTheme = Object.assign({}, AmplifyTheme, { button: MyButton });

const App = () => {
  const [items, setItems] = useState();
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [priority, setPriority] = useState();

  useEffect(() => {
    getItems().then(response => {
      console.log(response.data);
      setItems(response.data);
    });
  }, []);

  const handleSubmit = () => {
    const item = {
      id: uuid.v4(),
      title: title,
      description: description,
      priority: priority,
    };

    createItem(item)
      .then(res => {
        console.log(res);
        const data = [...items, item];
        setItems(data);
      })
      .catch(error => console.log(error));
  };

  const handleDelete = id => {
    deleteItem(id)
      .then(res => {
        console.log(res);
        const data = items.filter(item => item.id !== id);
        setItems(data);
      })
      .catch(error => console.log(error));
  };

  const CreateModalProps = {
    visible,
    title,
    description,
    priority,
    setVisible,
    setTitle,
    setDescription,
    setPriority,
    handleSubmit
  };

  const ItemListProps = {
    items,
    handleDelete
  };

  return (
    <Provider>
      <View style={{ flex: 5, paddingTop: 32, backgroundColor: "#f5f5f5" }}>
        <WingBlank>
          <WhiteSpace size="lg" />
          <Text style={{ fontSize: 24, alignSelf: "center" }}>
            Amplify To-do App
          </Text>
          <ItemList {...ItemListProps} />
        </WingBlank>
      </View>
      <View style={{ flex: 1 }}>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onPress={() => setVisible(true)}>
            Add Item
          </Button>
        </WingBlank>
      </View>
      <CreateModal {...CreateModalProps} />
    </Provider>
  );
};

export default withAuthenticator(App, {
  includeGreetings: true,
  theme: { MyTheme }
});
