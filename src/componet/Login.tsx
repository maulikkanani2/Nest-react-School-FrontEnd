import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Auth from "./Auth0";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Axios from "axios";
import { Email } from "@material-ui/icons";

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
  papers: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    backgroundColor: "#fff",
    textTransform: "none",
  },
  providerIcon: {
    marginRight: theme.spacing(2),
  },
  text: {
    textAlign: "center",
    margin: "15px",
  },
}));

export default function Login(props) {
  const classes = useStyles();

  const [formData, setFromData]: any = useState({
    schoolid: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleClick = (e: any) => {
    console.log("dsckjh");

    // window.location.href = 'https://39ff85dd2a17.ngrok.io/login'
    window.location.replace("https://08798e678134.ngrok.io/login");
  };

  const LoginWithJWT = (e: any) => {
    const payload = {
      username: formData.email,
      password: formData.password,
    };
    Axios.post(process.env.REACT_APP_NEST_API + "/auth/login", payload)
      .then((res) => {
        localStorage.setItem("cool-jwt", res.data.access_token);
        alert('login successfully')
      })
      .catch((error) => {
        if(error.response.data.message){
          alert('invalid username or password')
        }
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h5" variant="h4">
            House Point System
          </Typography>
          <Typography component="h6">{props.categories} Login</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="School Id"
            name="schoolid"
            autoFocus
            onChange={(e) => handleChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={(e) => handleChange(e)}
          />
          <div className={classes.papers}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => LoginWithJWT(e)}
            >
              Sign In
            </Button>
            <Grid>
              <Grid item md className={classes.text}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Grid>
              <Grid item md>
                {/* <Button
                  className={classes.googleButton}
                  onClick={(e) => handleGoogleClick(e)}
                  size="large"
                  variant="contained"
                >
                  <img
                    alt="Google"
                    className={classes.providerIcon}
                    src={
                      "https://react-material-kit.devias.io/static/images/google.svg"
                    }
                  />
                  Sign in with Google
                </Button> */}
                <Auth />
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
