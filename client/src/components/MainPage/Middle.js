import React from "react";

// Material UI components and styles
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// Components
import TopRated from "./TopRated";
import Newsletter from "./Newsletter";

// Custom styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "auto"
  }
}));

export default function Middle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <TopRated />
        </Grid>
        <Grid item sm={12} md={6}>
          <Newsletter />
        </Grid>
      </Grid>
    </div>
  );
}
