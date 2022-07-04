import React, { useState } from "react";
import { Avatar, Button, Typography, Popover, Modal } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import { auth, db } from "../../../firebase/config";
import { signOut } from "firebase/auth";
import styled from "styled-components";
import { onSnapshot, collection } from "firebase/firestore";

const { Title } = Typography;

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #e8e8e8;

  .ant-popover-placement-bottomLeft .ant-popover-arrow {
    left: 8px;
  }

  .ant-popover-title {
    text-align: center;
  }

  .username {
    color: #000;
    margin-left: 5px;
    line-height: 3;
    font-size: 15px;
    font-weight: 500;
  }

  .title {
    margin-left: 75px;
  }
`;

const UserInfo = () => {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };

  const LogoutChatApp = () => {
    signOut(auth);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  React.useEffect(() => {
    const collectionRef = collection(db, "users");
    onSnapshot(collectionRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log({ data, snapshot, docs: snapshot.docs });
    });
  }, []);
  return (
    <WrapperStyled>
      <div style={{ display: "flex" }}>
        <Popover
          placement="bottomLeft"
          onFocus={hide}
          title="Setting"
          trigger="click"
          visible={visible}
          onVisibleChange={handleVisibleChange}
          content={
            <Button onClick={LogoutChatApp} style={{ width: "100%" }}>
              Logout
            </Button>
          }
        >
          <Avatar size="large" icon={<UserOutlined />} />
        </Popover>

        <Typography.Text className="username">AB</Typography.Text>

        <div>
          <Title level={2} className="title">
            Chat
          </Title>
        </div>
      </div>
      <MessageOutlined
        style={{ fontSize: "20px ", paddingTop: "14px", color: "#000" }}
        onClick={showModal}
      />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </WrapperStyled>
  );
};

export default UserInfo;
