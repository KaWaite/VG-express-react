import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import image from "../Images/bloodborne.jpg";

const useStyles = makeStyles({
  card: {
    // maxWidth:
  },
  media: {
    height: "50vh"
  }
});

export default function Game({ match }) {
  // Fetch game from Server.js
  useEffect(() => {
    fetchGame();
    console.log(match.url);
  }, []);

  const [game, setGame] = useState([]);

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
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Bloodborne hunter"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {game.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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

  // return (
  //   <div>
  //     <h1>{game.title} PAGE!!!</h1>
  //     <h5>{game.releaseDate}</h5>
  //     <h5>{game.score} </h5>
  //     <h5>{game.genre} </h5>
  //   </div>
  // );
}
