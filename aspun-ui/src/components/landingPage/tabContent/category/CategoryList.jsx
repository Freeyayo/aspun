import React from "react";
import { List } from "antd";
import CategoryListItem from "./CategoryListItem";
import "./CategoryList.css";

const data = [
  {
    stage: "Inspection",
    sort: "1",
    status: "Active",
  },
  {
    stage: "Inspection",
    sort: "1",
    status: "Active",
  },
  {
    stage: "Inspection",
    sort: "1",
    status: "Active",
  },
];

const CategoryList = () => (
  <>
    <List
      className="database-list"
      size="small"
      header={<div>Datatable</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item className="list-item-container">
          <CategoryListItem />
        </List.Item>
      )}
    />
  </>
);

export default CategoryList;
