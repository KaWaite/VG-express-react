import React, { useState, useEffect } from "react";

// Material UI components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TopList from "./TopList";
import Typography from "@material-ui/core/Typography";

// Custom Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function TopRated() {
  const classes = useStyles();

  // Fetch games from Server.js
  useEffect(() => {
    fetchGames();
  }, []);

  const [PS4, setPS4] = useState([]);
  const [Switch, setSwitch] = useState([]);
  const [XboxOne, setXbox] = useState([]);

  const fetchGames = async () => {
    const data = await fetch("/api/games");
    const games = await data.json();
    const { PS4, Switch, XboxOne } = games;

    setPS4(PS4);
    setSwitch(Switch);
    setXbox(XboxOne);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5">Top Games</Typography>
      <Grid container spacing={3}>
        <TopList games={PS4} console="PS4" />
        <TopList games={Switch} console="Switch" />
        <TopList games={XboxOne} console="XboxOne" />
      </Grid>
    </div>
  );
}
