import React, { useState, useEffect, useContext } from "react";
import "./CreateNewCategoryModalRender.css";
import { Button, Form, Input, Select } from "antd";
import { CRUDService } from "../../../../../api";
import { CategoryContext } from "../Category";
import { useForm } from "antd/es/form/Form";

const { Option } = Select;

const fetchDropdownOptions = async (
  setStage,
  setUserRole,
  setCategoryOptions
) => {
  await CRUDService.getCreateCategoryDropdown()
    .then((res) => res.json())
    .then((res) => {
      const { stageList, userRoles, categoryIdsList } = res.result;
      const stageOptions = stageList.map((stageData) => {
        const { id, stage } = stageData;
        return {
          id,
          value: stage,
          label: stage,
        };
      });
      const userRoleOptions = userRoles.map((roleData) => {
        const { id, user_role } = roleData;
        return {
          id,
          value: user_role,
          label: user_role,
        };
      });
      setStage(stageOptions);
      setUserRole(userRoleOptions);
      setCategoryOptions(categoryIdsList);
    });
};

const CreateNewCategoryModalContent = ({ closeModal }) => {
  const [form] = useForm();
  const [stageOptions, setStageOptions] = useState([]);
  const [userRolesOptions, setUserRolesOptions] = useState([]);
  const [parentCategoryOptions, setParentCategoryOptions] = useState([]);

  const utils = useContext(CategoryContext);
  const {
    needFetchCreateCategoryDropdown,
    needUpdateCategoryList,
    categoryListUpdateTrigger,
  } = utils;

  useEffect(() => {
    fetchDropdownOptions(
      setStageOptions,
      setUserRolesOptions,
      setParentCategoryOptions
    );
  }, [needFetchCreateCategoryDropdown]);

  const onFinish = async (values) => {
    const {
      category,
      categoryid,
      p_categoryid,
      sort,
      status,
      stages,
      user_roles,
    } = values;
    const stagesIds = stages
      .map((stage) => {
        const option = stageOptions.filter((opt) => opt.value === stage);
        return option[0].id;
      })
      .join(",");
    const user_rolesIds = user_roles
      .map((userRole) => {
        const option = userRolesOptions.filter((opt) => opt.value === userRole);
        return option[0].id;
      })
      .join(",");
    await CRUDService.inserCategory(
      category,
      categoryid,
      p_categoryid,
      sort,
      status,
      stagesIds.length > 0 ? stagesIds : null,
      user_rolesIds.length > 0 ? user_rolesIds : null
    )
      .then((res) => res.json())
      .then((res) => {
        const { status, result } = res;
        if (status === "success") {
          if (result === "category inserted") {
            alert("inserted successful");
            closeModal();
            categoryListUpdateTrigger(!needUpdateCategoryList);
            form.resetFields();
            return;
          }
          if (result === "has_stage")
            alert("can not insert duplicate category");
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
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Tags Mode"
            options={stageOptions}
          />
        </Form.Item>

        <Form.Item
          label="User Roles"
          name="user_roles"
          rules={[{ required: true, message: "Please input User Roles!" }]}
        >
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Tags Mode"
            options={userRolesOptions}
          />
        </Form.Item>

        <Form.Item
          label="Parent Category ID"
          name="p_categoryid"
          rules={[
            { required: true, message: "Please input Parent Category ID!" },
          ]}
        >
          <Select>
            <Option value="NIL">NIL</Option>
            {parentCategoryOptions.map((option) => {
              return <Option value={option}>{option}</Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="Sort order"
          name="sort"
          rules={[{ required: true, message: "Please input Sort!" }]}
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

const CreateNewCategoryModalRender = ({ closeModal }) => {
  return (
    <div className="staging-master-container">
      <CreateNewCategoryModalContent closeModal={closeModal} />
    </div>
  );
};

export default CreateNewCategoryModalRender;
