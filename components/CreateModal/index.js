import React from "react";
import { InputItem, Modal } from "@ant-design/react-native";

const CreateModal = props => {
  return (
    <Modal
      title="Add Item"
      transparent
      visible={props.visible}
      maskClosable
      closable
      onClose={() => {
        props.setVisible(false);
      }}
      footer={[
        {
          text: "Cancel",
          onPress: () => {
            props.setVisible(false);
          }
        },
        {
          text: "Ok",
          onPress: () => {
            props.setVisible(false);
            props.handleSubmit();
          }
        }
      ]}
    >
      <InputItem
        clear
        value={props.title}
        onChange={value => props.setTitle(value)}
        placeholder="Title"
      />
      <InputItem
        clear
        value={props.description}
        onChange={value => props.setDescription(value)}
        placeholder="Description"
      />
      <InputItem
        clear
        value={props.priority}
        onChange={value => props.setPriority(value)}
        placeholder="Priority"
      />
    </Modal>
  );
};

export default CreateModal;
