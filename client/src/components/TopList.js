import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: "0 20px"
  }
}));

export default function TopList({ games, console }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4}>
      <List
        className={classes.root}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {console}
          </ListSubheader>
        }
      >
        {games.map(game => (
          <>
            <Divider component="li" />
            <ListItem key={game.id} button>
              <ListItemText primary={game.title} secondary={game.score} />
            </ListItem>
          </>
        ))}
      </List>
    </Grid>
  );
}
