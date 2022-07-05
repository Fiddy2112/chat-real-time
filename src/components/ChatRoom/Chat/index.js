import { UserAddOutlined, UserOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Avatar, Tooltip, Form, Input } from "antd";
import React from "react";
import styled from "styled-components";
import Message from "./Message";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  padding: 11px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`

align-items: center;
padding 2px 2px 2px 0;
border: 1px solid rgb(230, 230, 230);
border-radius: 2px;
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const ChatWindow = () => {
  const [textValue, setTextValue] = React.useState("");

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span className="header__description">This is room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button type="text" icon={<UserAddOutlined />}>
            Invite
          </Button>
          <Avatar.Group maxCount={2} size="small">
            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Tooltip>
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip>
              <Avatar>c</Avatar>
            </Tooltip>
            <Tooltip>
              <Avatar>d</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            displayName={"John Doe"}
            text={"Hello, how are you?"}
            createAt={"10:00 am"}
            photoURL={
              "https://images.unsplash.com/photo-1568819317551-31051b37f69f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2V4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Message
            displayName={"John wick"}
            text={"my dog is good"}
            createAt={"8:00 am"}
            photoURL={
              "https://images.unsplash.com/photo-1560354508-468e7201bbc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8am9obiUyMHdpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }
          />

          <Message
            displayName={"Dog"}
            text={"gau gau gau"}
            createAt={"11:00 am"}
            photoURL={
              "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
        </MessageListStyled>
        <FormStyled>
          <Input.Group compact>
            <Input
              style={{
                width: "calc(100% - 40px)",
                borderRadius: "2px",
              }}
              placeholder="Type a message..."
              autoComplete="off"
              bordered={false}
              value={textValue}
              onChange={handleChange}
            />
            {textValue ? (
              <Button
                style={{ borderRadius: "50%", marginLeft: "5px" }}
                icon={<SendOutlined />}
              />
            ) : (
              ""
            )}
          </Input.Group>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
};

export default ChatWindow;
