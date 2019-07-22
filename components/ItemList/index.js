import React from "react";
import { ScrollView, Text, View } from 'react-native';
import { Card, Icon, WhiteSpace } from '@ant-design/react-native';

const ItemList = props => {
  if (!props.items) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <ScrollView>
        {props.items.map(item => {
          return (
            <React.Fragment key={item.id}>
              <WhiteSpace size="lg" />
              <Card>
                <Card.Header
                  title={item.title}
                  extra={
                    <Icon
                      name="delete"
                      style={{ alignSelf: "flex-end" }}
                      onPress={() => props.handleDelete(item.id)}
                    />
                  }
                />
                <Card.Body>
                  <View style={{ height: 32, paddingLeft: 16 }}>
                    <Text>{item.description}</Text>
                  </View>
                </Card.Body>
                <Card.Footer content={item.priority} />
              </Card>
            </React.Fragment>
          );
        })}
      </ScrollView>
    );
  }
};

export default ItemList;
