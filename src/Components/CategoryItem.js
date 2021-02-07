import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";

const CategoryItem = (props) => {
  return (
    <ListItem button component="a">
      <ListItemText>{props.item}</ListItemText>
    </ListItem>
  );
};

export default CategoryItem;
