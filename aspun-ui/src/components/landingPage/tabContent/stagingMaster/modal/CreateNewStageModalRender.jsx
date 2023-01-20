import React, { useContext } from "react";
import "./CreateNewStageModalRender.css";
import { CRUDService } from "../../../../../api";
import { Button, Form, Input, Select } from "antd";
import { StagingMasterContext } from "../StagingMaster";

const { Option } = Select;

const CreateNewStageModalContent = ({ closeModal }) => {
  const [form] = Form.useForm();
  const utils = useContext(StagingMasterContext);
  const { updateTrigger, needUpdateStageMasterList } = utils;

  const onFinish = async (values) => {
    const { stage, sort, status } = values;
    await CRUDService.insertStageMaster(stage, sort, status)
      .then((res) => res.json())
      .then((res) => {
        const { status, result } = res;
        if (status === "success") {
          if (result === "inserted") {
            alert("inserted successful");
            closeModal();
            updateTrigger(!needUpdateStageMasterList);
            return;
          }
          if (result === "has_stage") alert("can not insert replicate item");
          return;
        }
        alert("inserted failed, error:", result);
        return;
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="create-new-stage-modal-content">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Stage"
          name="stage"
          rules={[{ required: true, message: "Please input stage!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Sort order"
          name="sort"
          rules={[{ required: true, message: "Please input sort!" }]}
        >
          <Select>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please input status!" }]}
        >
          <Select>
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const CreateNewStageModalRender = ({ closeModal }) => {
  return (
    <div className="staging-master-container">
      <CreateNewStageModalContent closeModal={closeModal} />
    </div>
  );
};

export default CreateNewStageModalRender;
