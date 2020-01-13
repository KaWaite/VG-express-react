import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Bloodborne from "../Images/bloodborne.jpg";
import DeathStranding from "../Images/DeathStranding.jpg";
import FFX from "../Images/finalfantasyX.jpg";

const useStyles = makeStyles({
  card: {
    // maxWidth:
  },
  media: {
    height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  desc: {
    whiteSpace: "pre-wrap"
  }
});

export default function Game({ match }) {
  // set classes for styles
  const classes = useStyles();

  // Fetch game from Server.js and create state
  const [game, setGame] = useState([]);

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = async () => {
    const fetchItem = await fetch(`/api/games`);
    const games = await fetchItem.json();

    // retrieve specific game from server
    const getGame = games => {
      const splitURL = match.url.split("/");
      const gameConsole = splitURL[2];
      if (gameConsole === "PS4") {
        for (let i = 0; i < games.PS4.length; i++) {
          if (games.PS4[i].title === match.params.game) {
            return games.PS4[i];
          }
        }
      } else if (gameConsole === "Switch") {
        for (let i = 0; i < games.Switch.length; i++) {
          if (games.Switch[i].title === match.params.game) {
            return games.Switch[i];
          }
        }
      } else {
        for (let i = 0; i < games.XboxOne.length; i++) {
          if (games.XboxOne[i].title === match.params.game) {
            return games.XboxOne[i];
          }
        }
      }
    };
    const game = getGame(games);
    setGame(game);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            game.title === "Bloodborne"
              ? Bloodborne
              : game.title === "Death Stranding"
              ? DeathStranding
              : FFX
          }
          title={game.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            {game.title}
          </Typography>
          <Typography
            variant="body2"
            className={classes.desc}
            color="textSecondary"
            component="p"
          >
            {game.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
