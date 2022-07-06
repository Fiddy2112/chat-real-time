import { Collapse, Typography } from "antd";
import React from "react";
import { AppContext } from "../../../Context/AppProvider";

const { Panel } = Collapse;

const RoomList = () => {
  const { rooms } = React.useContext(AppContext);
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Panel header="List Room" key="1">
        {rooms.map((room) => (
          <Typography.Link key={room.id}>{room.name}</Typography.Link>
        ))}
      </Panel>
    </Collapse>
  );
};

export default RoomList;
