import React, { useState, createContext } from "react";
import CreateNewCategory from "./modal/CreateNewCategory";
import CategoryList from "./CategoryList";
import "./Category.css";

export const CategoryContext = createContext();

const Category = () => {
  const [needFetchCreateCategoryDropdown, createCategoryDropdownUpdateTrigger] =
    useState(false);
  const [needUpdateCategoryList, categoryListUpdateTrigger] = useState(false);
  const categoryUtils = {
    needFetchCreateCategoryDropdown,
    createCategoryDropdownUpdateTrigger,
    needUpdateCategoryList,
    categoryListUpdateTrigger,
  };
  return (
    <div className="category-container">
      <CategoryContext.Provider value={categoryUtils}>
        <CreateNewCategory />
        <CategoryList />
      </CategoryContext.Provider>
    </div>
  );
};

export default Category;
