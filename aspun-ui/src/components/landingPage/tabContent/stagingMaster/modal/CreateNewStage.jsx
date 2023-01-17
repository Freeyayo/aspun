import React, { useState } from "react";
import { Button, Modal } from "antd";
import CreateNewStageModalRender from "./CreateNewStageModalRender";
import "./CreateNewStage.css";

const CreateNewStage = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <div className="create-new-stage">
      <Button type="primary" onClick={showModal}>
        Create a New Stage
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer
      >
        <CreateNewStageModalRender />
      </Modal>
    </div>
  );
};

export default CreateNewStage;
