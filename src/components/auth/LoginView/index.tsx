import React from "react";
import  FC from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Link,
  Tooltip,
  Typography,
  makeStyles,
  Button,
  FormHelperText,
  TextField,
} from "@material-ui/core";
import  {Theme}  from "../../theme";
import Page from "./Page";
import { Formik } from 'formik';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#222431',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  banner: {
    backgroundColor: '#2a2d3d',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  bannerChip: {
    marginRight: theme.spacing(2),
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
  },
  cardContent: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    minHeight: 400,
  },
  currentMethodIcon: {
    height: 40,
    "& > img": {
      width: "auto",
      maxHeight: "100%",
    },
  },
}));

const LoginView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Login">
      <div className={classes.banner}>
        <Container maxWidth="md">
          <Box alignItems="center" display="flex" justifyContent="center">
            <Chip
              color="secondary"
              label="NEW"
              size="small"
              className={classes.bannerChip}
            />
            <Box alignItems="center" display="flex">
              <Typography color="textPrimary" variant="h6">
                Visit our{" "}
                <Link component={RouterLink} to="/docs">
                  docs
                </Link>{" "}
                and find out how to switch between
              </Typography>

            </Box>
          </Box>
        </Container>
      </div>
      <Container className={classes.cardContainer} maxWidth="sm">
        <Box mb={8} display="flex" justifyContent="center">
          <RouterLink to="/"></RouterLink>
        </Box>
        <Card>
          <CardContent className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              mb={3}
            >
              <div>
                <Typography color="textPrimary" gutterBottom variant="h2">
                  Sign in
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Sign in on the internal platform
                </Typography>
              </div>
              <div className={classes.currentMethodIcon}>
                <img alt="Auth method" />
              </div>
            </Box>
          <TextField

            fullWidth
            autoFocus

            label="Email Address"
            margin="normal"
            name="email"

            type="email"

            variant="outlined"
          />
          <TextField

            fullWidth

            label="Password"
            margin="normal"
            name="password"

            type="password"

            variant="outlined"
          />
          <Box mt={2}>
            <Button
              color="secondary"

              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Log In
            </Button>
          </Box>
          <Box mt={2}>

          </Box>

            <Box my={3}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              to="/register"
              variant="body2"
              color="textSecondary"
            >
              Create new account
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default LoginView;
