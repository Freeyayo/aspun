import React, { useEffect, useState, useContext } from "react";
import { List } from "antd";
import { CRUDService } from "../../../../api";
import { StagingMasterContext } from "./StagingMaster";
import "./StagingMasterList.css";

const fetchStageMaster = async (updateList) => {
  await CRUDService.getStageMaster()
    .then((res) => res.json())
    .then((res) => {
      const { result } = res;
      updateList(result);
    });
};

const StagingMasterList = () => {
  const utils = useContext(StagingMasterContext);
  const { needUpdateStageMasterList } = utils;
  const [stageMasterList, updateStageMasterList] = useState([]);

  useEffect(() => {
    fetchStageMaster(updateStageMasterList);
  }, [needUpdateStageMasterList]);

  return (
    <>
      <List
        className="database-list"
        size="small"
        header={<div>Datatable</div>}
        bordered
        dataSource={stageMasterList}
        renderItem={(item) => (
          <List.Item className="list-item-container">
            <>
              <div className="list-item">
                <div className="list-item-text-container">
                  <span className="list-item-title">Stage:</span>
                  {item.stage}
                </div>
              </div>
              <div className="list-item">
                <div className="list-item-text-container">
                  <span className="list-item-title">Sort:</span>
                  {item.sort}
                </div>
              </div>
              <div className="list-item">
                <div className="list-item-text-container">
                  <span className="list-item-title">Status:</span>
                  {item.status}
                </div>
              </div>
            </>
          </List.Item>
        )}
      />
    </>
  );
};

export default StagingMasterList;
