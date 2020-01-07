const express = require("express");

const app = express();

app.get("/api/games", (req, res) => {
  const games = {
    PS4: [
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
        releaseDate: "2000",
        developer: "SquareEnix",
        genre: "RPG",
        score: "8.8"
      }
    ],
    Switch: [
      {
        id: 1,
        title: "Mario",
        releaseDate: "2011",
        developer: "Nintendo",
        genre: "action",
        score: "9.7"
      },
      {
        id: 2,
        title: "Pokemon",
        releaseDate: "2013",
        developer: "Level 1",
        genre: "sci-fi",
        score: "9.4"
      },
      {
        id: 3,
        title: "Dragon Quest",
        releaseDate: "1993",
        developer: "SquareEnix",
        genre: "RPG",
        score: "8.8"
      }
    ],
    XboxOne: [
      {
        id: 1,
        title: "Gears of War",
        releaseDate: "2011",
        developer: "IDontKnow",
        genre: "action",
        score: "9.7"
      },
      {
        id: 2,
        title: "Forza",
        releaseDate: "201234",
        developer: "Level 3434",
        genre: "sci-fi",
        score: "9"
      },
      {
        id: 3,
        title: "Halo",
        releaseDate: "2002",
        developer: "XboxDevTeam",
        genre: "Shooter",
        score: "6.5"
      }
    ]
  };

  res.json(games);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// const games = [
//   {
//     id: 1,
//     title: "Bloodborne",
//     releaseDate: "2015",
//     developer: "FromSoftware",
//     genre: "action",
//     score: "9.7"
//   },
//   {
//     id: 2,
//     title: "Death Stranding",
//     releaseDate: "2019",
//     developer: "Kojima Productions",
//     genre: "sci-fi",
//     score: "9.4"
//   },
//   {
//     id: 3,
//     title: "Final Fantasy X",
//     releaseDate: "2002",
//     developer: "SquareEnix",
//     genre: "RPG",
//     score: "8.8"
//   }
// ];
