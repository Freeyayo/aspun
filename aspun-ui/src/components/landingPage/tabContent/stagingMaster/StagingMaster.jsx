import React, { useState, createContext } from "react";
import CreateNewStage from "./modal/CreateNewStage";
import StagingMasterList from "./StagingMasterList";
import "./StagingMaster.css";

export const StagingMasterContext = createContext();

const StagingMaster = () => {
  const [needUpdateStageMasterList, updateTrigger] = useState(false);
  const stageMasterUtils = {
    needUpdateStageMasterList,
    updateTrigger,
  };
  return (
    <div className="staging-master-container">
      <StagingMasterContext.Provider value={stageMasterUtils}>
        <CreateNewStage />
        <StagingMasterList />
      </StagingMasterContext.Provider>
    </div>
  );
};

export default StagingMaster;
