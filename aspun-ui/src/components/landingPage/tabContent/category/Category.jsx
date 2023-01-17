import React from "react";
import CreateNewCategory from "./modal/CreateNewCategory";
import CategoryList from "./CategoryList";
import "./Category.css";

const Category = () => {
  return (
    <div className="category-container">
      <CreateNewCategory />
      <CategoryList />
    </div>
  );
};

export default Category;
