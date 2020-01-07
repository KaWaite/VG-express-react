import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
// import WorkIcon from "@material-ui/icons/Work";
// import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
    padding: "0 20px"
  }
}));

export default function TopList() {
  const classes = useStyles();

  // ********************************************************************************
  // ********* useEffect and fetch attempt. until the return can delete  **********
  useEffect(() => {
    fetchGames();
  }, []);

  const [PS4, setPS4] = useState([]);
  const [Switch, setSwitch] = useState([]);

  const fetchGames = async () => {
    const data = await fetch("/api/games");
    const games = await data.json();
    const { PS4, Switch } = games;
    console.log(games);
    // console.log(PS4);
    // console.log(Switch);
    // console.log(games.PS4);
    // console.log(games.Switch);

    setPS4(PS4);
    setSwitch(Switch);
  };
  //********************************************************************************
  //********************************************************************************

  return (
    <List
      className={classes.root}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Ps4
        </ListSubheader>
      }
    >
      {PS4.map(game => (
        <>
          <ListItem key={game.id} button>
            {/* <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar> */}
            <ListItemText primary={game.title} secondary={game.score} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
}
