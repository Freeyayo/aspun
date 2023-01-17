import React from "react";
import { Tabs } from "antd";
import StagingMaster from "./tabContent/stagingMaster/StagingMaster";
import Category from "./tabContent/category/Category";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: `Staging Master`,
    children: <StagingMaster />,
  },
  {
    key: "2",
    label: `Category`,
    children: <Category />,
  },
];

const LandingPage = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);
export default LandingPage;
