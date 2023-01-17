import React from "react";
import CreateNewStage from "./modal/CreateNewStage";
import StagingMasterList from "./StagingMasterList";
import "./StagingMaster.css";

const StagingMaster = () => {
  return (
    <div className="staging-master-container">
      <CreateNewStage />
      <StagingMasterList />
    </div>
  );
};

export default StagingMaster;
