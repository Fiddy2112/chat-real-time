import { MessageOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Modal, Popover, Typography } from "antd";
import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../Context/AppProvider";
import { AuthContext } from "../../../Context/AuthProvider";
import { auth } from "../../../firebase/config";
import AddRoomModal from "./components/Modals/AddRoomModal";

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

  const { rooms } = useContext(AppContext);

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

  // React.useEffect(() => {
  //   const collectionRef = collection(db, "users");
  //   onSnapshot(collectionRef, (snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log({ data, snapshot, docs: snapshot.docs });
  //   });
  // }, []);

  const data = React.useContext(AuthContext);
  console.log({ data });
  const {
    user: { displayName, email, uid, photoURL },
  } = data;

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
          <Avatar size="large" src={photoURL}>
            {!photoURL ? (
              displayName?.charAt(0)?.toUpperCase()
            ) : (
              <UserOutlined />
            )}
          </Avatar>
        </Popover>

        <Typography.Text className="username">{displayName}</Typography.Text>

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
      <AddRoomModal
        title="Create Room"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </WrapperStyled>
  );
};

export default UserInfo;
