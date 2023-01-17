import React from "react";
import "./CreateNewStageModalRender.css";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

const CreateNewStageModalContent = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
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
          <Input.Group compact>
            <Select defaultValue="1">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </Input.Group>
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please input status!" }]}
        >
          <Input.Group compact>
            <Select defaultValue="Active">
              <Option value="Active">Active</Option>
            </Select>
          </Input.Group>
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

const CreateNewStageModalRender = () => {
  return (
    <div className="staging-master-container">
      <CreateNewStageModalContent />
    </div>
  );
};

export default CreateNewStageModalRender;
