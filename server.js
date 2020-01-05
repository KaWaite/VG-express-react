const express = require("express");

const app = express();

app.get("/api/games", (req, res) => {
  const games = [
    {
      id: 1,
      title: "Bloodborne",
      releaseDate: "2015",
      developer: "FromSoftware",
      genre: "action",
      score: "9.7"
    },
    {
      id: 2,
      title: "Death Stranding",
      releaseDate: "2019",
      developer: "Kojima Productions",
      genre: "sci-fi",
      score: "9.4"
    },
    {
      id: 3,
      title: "Final Fantasy X",
      releaseDate: "2002",
      developer: "SquareEnix",
      genre: "RPG",
      score: "8.8"
    }
  ];

  res.json(games);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
