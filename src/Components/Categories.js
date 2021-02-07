import { List, Typography } from "@material-ui/core";
import React from "react";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <>
      <List component="nav">
        <CategoryItem item="Blockchain" />
        <CategoryItem item="Computer Networks" />
        <CategoryItem item="Data Science" />
        <CategoryItem item="Information Security" />
        <CategoryItem item="Web Programming" />
      </List>
    </>
  );
};

export default Categories;
