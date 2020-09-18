import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import Login from './Login'

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerText: {
    textAlign: "center",
    padding: "0 35px",
  },
  heading: {},
  categoryBtn: {
    margin: "15px 0px",
    borderRadius: 16,
    color: "#fff",
    textAlign: "inherit",
    textTransform: "none",
    justifyContent: "unset",
    padding: "10px 30px",
  },
  list1: {
    fontSize: 20,
    fontWeight: 900,
  },
  ul: {
    listStyleType: "none",
    padding: 0,
  },
}));
interface ILaneHeadeMenuProps {
	props: any;
	t: any;
	onDelete: any;
  }
const LoginCategory:React.FC<ILaneHeadeMenuProps> = () => {
  const classes = useStyles();

  const [category, setcategory] = useState("");

  return (
    <div>
        {category !== '' ? (
            <Login categories={category}  />
        ) : (

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h5" variant="h4" className={classes.heading}>
              House Point System
            </Typography>
            <Typography component="h6" className={classes.innerText}>
              Engaging experience that encourages active participation in
              learning
            </Typography>
          </div>
          <div style={{ padding: "0 30px" }}>
            <Button
              style={{ background: "#5D9BF9" }}
              className={classes.categoryBtn}
              fullWidth
              onClick={() => setcategory('Teacher')}
            >
              <img src="./books2.svg" style={{ paddingRight: 20 }} />
              <ul className={classes.ul}>
                <li className={classes.list1}>Teacher</li>
                <li>Manage house point</li>
              </ul>
            </Button>
            <Button
              className={classes.categoryBtn}
              style={{ background: "#2DB6BF" }}
              fullWidth
              onClick={() => setcategory('Parents')}
            >
              <img src="./exam.svg" style={{ paddingRight: 20 }} />
              <ul className={classes.ul}>
                <li className={classes.list1}>Parents</li>
                <li>View my student</li>
              </ul>
            </Button>
            <Button
              className={classes.categoryBtn}
              style={{ background: "#4CB2EB" }}
              fullWidth
              onClick={() => setcategory('Student')}
            >
              <img src="./mortarboard.svg" style={{ paddingRight: 20 }} />
              <ul className={classes.ul}>
                <li className={classes.list1}>Student</li>
                <li>View house point</li>
              </ul>
            </Button>
          </div>
        </Grid>
      </Grid>
        )}
    </div>
  );
};

export default LoginCategory;
