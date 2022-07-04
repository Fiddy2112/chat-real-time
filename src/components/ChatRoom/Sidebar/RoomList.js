import { Collapse, Typography } from "antd";
import React from "react";

const { Panel } = Collapse;

const RoomList = () => {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="List Room" key="1">
        <Typography.Link>Room 1</Typography.Link>
        <Typography.Link>Room 2</Typography.Link>
        <Typography.Link>Room 3</Typography.Link>
      </Panel>
    </Collapse>
  );
};

export default RoomList;
