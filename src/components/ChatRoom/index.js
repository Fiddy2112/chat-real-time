import React from "react";
import { Row, Col } from "antd";
import Sidebar from "./Sidebar";
import ChatWindow from "./Chat";

const ChatRoom = () => {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Sidebar />
        </Col>
        <Col span={16}>
          <ChatWindow />
        </Col>
      </Row>
    </div>
  );
};

export default ChatRoom;
