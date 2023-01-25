import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import { useEffect } from "react";
import { useState } from "react";

const treeDataResolver = (rawTreeData) => {
  return rawTreeData.map((data) => {
    console.log(data);
    const node = {};
    if (data.children) {
      node.children = treeDataResolver(data.children);
    }
    const { id, category, sort, stage_masters, user_roles } = data;
    node.title = `category: ${category} sort: ${sort} stage masters: ${stage_masters.join(
      ","
    )} user roles: ${user_roles.join(",")}`;
    node.key = id + Math.random();
    return node;
  });
};

const CategoryListItem = ({ data }) => {
  const [treeData, setTreeData] = useState([]);
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  useEffect(() => {
    setTreeData(treeDataResolver(data));
    console.log(treeData);
  }, [data]);

  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      onSelect={onSelect}
      treeData={treeData}
    />
  );
};

export default CategoryListItem;
