import { Grid } from "@material-ui/core";
import Timeline from "./Timeline";
import Categories from "./Categories";
import React from "react";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={1} md={2}></Grid>
      <Grid item xs={10} md={6}>
        <Timeline />
      </Grid>
      <Grid item xs={1} md={1}></Grid>
      <Grid item xs={false} md={2}>
        <Categories />
      </Grid>
      <Grid item xs={false} md={1}></Grid>
    </Grid>
  );
};

export default Home;
