import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
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

export default function TopRated() {
  const classes = useStyles();

  return (
    <List
      className={classes.root}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Ps4
        </ListSubheader>
      }
    >
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bloodborne" secondary="Score: 9.0" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bloodborne" secondary="Score: 9.0" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bloodborne" secondary="Score: 9.0" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bloodborne" secondary="Score: 9.0" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bloodborne" secondary="Score: 9.0" />
      </ListItem>
    </List>
  );
}
