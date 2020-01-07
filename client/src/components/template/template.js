import React, { Component } from "react";
import "./Template.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
// import ImageIcon from "@material-ui/icons/Image";
// import WorkIcon from "@material-ui/icons/Work";
// import BeachAccessIcon from "@material-ui/icons/BeachAccess";
// import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";

export default class Template extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    fetch("/api/games")
      .then(res => res.json())
      .then(games =>
        this.setState({ games }, () => console.log("Games fetched..", games))
      );
  }

  render() {
    return (
      <>
        <List subheader={<ListSubheader component="div">PS4</ListSubheader>}>
          {this.state.games.map(game => (
            <ListItem button>
              <ListItemText primary={game.title} secondary={game.score} />
            </ListItem>
          ))}
        </List>
        <List subheader={<ListSubheader component="div">PS4</ListSubheader>}>
          {this.state.games.map(game => (
            <ListItem button>
              <ListItemText primary={game.title} secondary={game.releaseDate} />
            </ListItem>
          ))}
        </List>
      </>
      // <div>
      //   <h2>Games</h2>
      //   <ul>
      //     {this.state.games.map(game => (
      //       <li key={game.id}>
      //         {game.title}
      //         <ul>
      //           <li>{game.releaseDate}</li>
      //           <li>{game.developer}</li>
      //           <li>{game.genre}</li>
      //         </ul>
      //       </li>
      //     ))}
      //   </ul>
      // </div>
    );
  }
}
