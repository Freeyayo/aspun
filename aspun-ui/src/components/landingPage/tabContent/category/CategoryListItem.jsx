import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";

const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
      },
    ],
  },
];

const CategoryListItem = () => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={["0-0-0"]}
      onSelect={onSelect}
      treeData={treeData}
    />
  );
};

export default CategoryListItem;
