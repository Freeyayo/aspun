import React from "react";
import "./CreateNewCategoryModalRender.css";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

const stageOptions = [
  {
    value: "Inspection",
    label: "inspection",
  },
  {
    value: "Sampling",
    label: "sampling",
  },
  {
    value: "Schedule",
    label: "schedule",
  },
];

const userRoleOptions = [
  {
    value: "Admin",
    label: "admin",
  },
  {
    value: "Lab Assitant",
    label: "lab_assitant",
  },
];

const CreateNewCategoryModalContent = () => {
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
          label="Category ID"
          name="categoryid"
          rules={[{ required: true, message: "Please input Category ID!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please input Category!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Stages"
          name="stages"
          rules={[{ required: true, message: "Please input stages!" }]}
        >
          <Input.Group compact>
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Tags Mode"
              options={stageOptions}
            />
          </Input.Group>
        </Form.Item>

        <Form.Item
          label="User Roles"
          name="user_roles"
          rules={[{ required: true, message: "Please input User Roles!" }]}
        >
          <Input.Group compact>
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Tags Mode"
              options={userRoleOptions}
            />
          </Input.Group>
        </Form.Item>

        <Form.Item
          label="Parent Category ID"
          name="p_categoryid"
          rules={[
            { required: true, message: "Please input Parent Category ID!" },
          ]}
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
          label="Sort order"
          name="sort"
          rules={[{ required: true, message: "Please input Sort!" }]}
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

const CreateNewCategoryModalRender = () => {
  return (
    <div className="staging-master-container">
      <CreateNewCategoryModalContent />
    </div>
  );
};

export default CreateNewCategoryModalRender;
