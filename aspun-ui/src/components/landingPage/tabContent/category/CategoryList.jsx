import React, { useEffect, useContext } from "react";
import { List } from "antd";
import CategoryListItem from "./CategoryListItem";
import { CRUDService } from "../../../../api";
import "./CategoryList.css";
import { CategoryContext } from "./Category";
import { useState } from "react";

const fetchCategoryList = async (setter) => {
  await CRUDService.getCategoryList()
    .then((res) => res.json())
    .then((res) => {
      const { status, result } = res;
      if (status === "success") {
        setter(result.category);
      }
    });
};

const CategoryList = () => {
  const [dataSource, setDataSource] = useState([]);
  const utils = useContext(CategoryContext);
  const { needUpdateCategoryList } = utils;
  useEffect(() => {
    fetchCategoryList(setDataSource);
  }, [needUpdateCategoryList]);
  return (
    <>
      <List
        className="database-list"
        size="small"
        header={<div>Datatable</div>}
        bordered
        dataSource={[1]}
        renderItem={(data) => (
          <List.Item className="list-item-container">
            <CategoryListItem data={dataSource} />
          </List.Item>
        )}
      />
    </>
  );
};

export default CategoryList;
