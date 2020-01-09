import React, { useState, useEffect } from "react";

export default function Game({ match }) {
  // Fetch game from Server.js
  useEffect(() => {
    fetchGame();
    // console.log(match.params.game);
  }, []);

  const [game, setGame] = useState([]);

  const fetchGame = async () => {
    const fetchItem = await fetch(`/api/games`);
    const games = await fetchItem.json();

    // retrieve specific game from server
    const getGame = games => {
      for (let i = 0; i < games.PS4.length; i++) {
        if (games.PS4[i].title === match.params.game) {
          // console.log(games.PS4[i].title);
          // console.log("success");
          return games.PS4[i];
        }
      }
    };
    const game = getGame(games);
    // console.log(game);
    // const test = match.params.game;
    setGame(game);
  };

  return (
    <div>
      <h1>{game.title} PAGE!!!</h1>
      <h5>{game.releaseDate}</h5>
      <h5>{game.score} </h5>
      <h5>{game.genre} </h5>
    </div>
  );
}
