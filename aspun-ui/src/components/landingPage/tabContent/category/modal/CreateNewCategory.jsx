import React, { useState, useContext } from "react";
import { Button, Modal } from "antd";
import CreateNewCategoryModalRender from "./CreateNewCategoryModalRender";
import { CategoryContext } from "../Category";
import "./CreateNewCategory.css";

const CreateNewStage = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const utils = useContext(CategoryContext);
  const {
    needFetchCreateCategoryDropdown,
    createCategoryDropdownUpdateTrigger,
  } = utils;

  const showModal = () => {
    createCategoryDropdownUpdateTrigger(!needFetchCreateCategoryDropdown);
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
    <div className="create-new-category">
      <Button type="primary" onClick={showModal}>
        Create a New Category
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer
      >
        <CreateNewCategoryModalRender closeModal={handleCancel} />
      </Modal>
    </div>
  );
};

export default CreateNewStage;
