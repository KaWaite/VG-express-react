import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import TopRated from "./TopRated";
import Newsletter from "./Newsletter";

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
          <Typography variant="h5">Top Games</Typography>
          <TopRated />
        </Grid>
        <Grid item sm={12} md={6}>
          <Newsletter />
        </Grid>
      </Grid>
    </div>
  );
}
