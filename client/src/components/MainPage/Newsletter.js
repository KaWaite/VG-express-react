import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40%"
    },
    width: "70%",
    margin: "auto",
    padding: "30px 5px",
    textAlign: "center",
    backgroundColor: "rgba(199,201,123,1)"
    // color: "white"
  }
}));

export default function Newsletter() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <form noValidate autoComplete="off">
        <Typography variant="h4">Newsletter Sign-up</Typography>
        <div>
          <TextField
            // required
            id="standard-required"
            label="Email Address"
            placeholder="Required"
            fullWidth
            variant="outlined"
          />
          <TextField
            // required
            id="standard-password-input"
            label="Password"
            type="password"
            placeholder="ABCxyz123"
            fullWidth
            variant="outlined"
          />
        </div>
        <Button color="inherit" variant="contained">
          Sign-up
        </Button>
      </form>
    </Paper>
  );
}
