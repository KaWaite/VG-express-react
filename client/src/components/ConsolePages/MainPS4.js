import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { Link } from "react-router-dom";

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
    },
    width: "100%"
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  },
  link: {
    color: "black",
    textDecoration: "none",
    padding: "none"
  }
});

export default function MainPS4({ match }) {
  const classes = useStyles();

  // Fetch games from Server.js
  useEffect(() => {
    fetchGames();
  }, []);

  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const data = await fetch("/api/games");
    const games = await data.json();
    const { PS4 } = games;
    setGames(PS4);
  };

  return (
    <>
      <h1>PS4 Games</h1>
      <TableContainer component={Paper}>
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
            {games.map(game => (
              <StyledTableRow key={game.id}>
                <StyledTableCell component="th" scope="row">
                  <Link
                    className={classes.link}
                    to={`/games/PS4/${game.title}`}
                  >
                    {game.title}
                  </Link>
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
    </>
  );
}
