import React from "react";
import { List } from "antd";
import "./StagingMasterList.css";

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

const StagingMasterList = () => (
  <>
    <List
      className="database-list"
      size="small"
      header={<div>Datatable</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item className="list-item-container">
          <div className="list-item">
            <span className="list-item-title">Stage:</span> {item.stage}
          </div>
          <div className="list-item">
            <span className="list-item-title">Sort:</span> {item.sort}
          </div>
          <div className="list-item">
            <span className="list-item-title">Status:</span> {item.status}
          </div>
        </List.Item>
      )}
    />
  </>
);

export default StagingMasterList;
