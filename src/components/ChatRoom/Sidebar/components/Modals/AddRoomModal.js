import React from "react";
import { Modal, Input, Form } from "antd";

const AddRoomModal = ({ title, visible, onOk, onCancel }) => {
  return (
    <div>
      <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
        <Form>
          <Form.Item label="Room Name">
            <Input placeholder="Type room name..." name="name" />
          </Form.Item>
          <Form.Item label="Description">
            <Input.TextArea
              placeholder="Type description room name..."
              name="description"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddRoomModal;
