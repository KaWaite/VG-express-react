import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// components
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';

// Images
import MainImage from "../Images/the_last_of_us_2.jpg";
import image2 from "../Images/Cp2077.jpg";
import image3 from "../Images/Ds.jpg";
import image4 from "../Images/ffviiR.jpg";
import image5 from "../Images/Re2R.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: "50px",
    // height: "80vh",
    fontFamily: `"Poppins", "sans-serif"`
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: "left",
    backgroundColor: "rgba(199,201,123,1)",
    color: theme.palette.text.secondary
    // minHeight: "68px"
  },
  mainarticle: {
    minHeight: "500px",
    color: "white",
    backgroundImage: `url(${MainImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  img: {
    width: "100%"
  },
  title: {
    padding: "20px 10px 10px 20px"
  },
  sub: {
    padding: "0 50px"
  }
}));

const tileData = [
  {
    img: image2,
    title: "The Last of Us pt.ii",
    author: "author"
  },
  {
    img: image3,
    title: "Death Stranding",
    author: "author"
  },
  {
    img: image4,
    title: "Final Fantasy VII Remake",
    author: "author"
  },
  {
    img: image5,
    title: "Resident Evil 2 Remake",
    author: "author"
  }
];

export default function Articles() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>News</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Paper className={`${classes.paper} ${classes.mainarticle}`}>
            <Typography variant="h2" component="h2" className={classes.title}>
              The Last Of Us pt. ii
            </Typography>
            <Typography variant="h5" className={classes.sub}>
              When will it release??
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Grid container spacing={1} direction="column">
            {tileData.map(tile => (
              <Grid item key={tile.img} cols={tile.cols || 1}>
                <Paper className={classes.paper}>
                  {/* <Typography variant="caption">{tile.title}</Typography> */}
                  <img
                    className={classes.img}
                    src={tile.img}
                    alt={tile.title}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
