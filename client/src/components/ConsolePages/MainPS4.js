// **************************************************************************************************************
// **************************************************************************************************************
// **************************************************************************************************************
// *********************************************NEEDS FIXING TO WORK*********************************************
// **************************************************************************************************************
// **************************************************************************************************************
// **************************************************************************************************************

import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function MainPS4({ match }) {
  const classes = useStyles();

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

  return (
    <TableContainer component={Paper}>
      <h1>PS4 page!</h1>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Game Title</StyledTableCell>
            <StyledTableCell align="right">Score</StyledTableCell>
            <StyledTableCell align="right">Release Date</StyledTableCell>
            <StyledTableCell align="right">Genre</StyledTableCell>
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={game.id}>
              <StyledTableCell component="th" scope="row">
                {game.title}
              </StyledTableCell>
              <StyledTableCell align="right">{game.score}</StyledTableCell>
              <StyledTableCell align="right">
                {game.releaseDate}
              </StyledTableCell>
              <StyledTableCell align="right">{game.genre}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
