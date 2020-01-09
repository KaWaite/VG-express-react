import React, { useState, useEffect } from "react";

export default function useGameData() {
  // Fetch games from Server.js
  useEffect(() => {
    console.log(fetchGames());
  }, []);

  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const data = await fetch("/api/games");
    const games = await data.json();

    setGames(games);
  };
  return games;
}
