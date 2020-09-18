import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  FormHelperText,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {}
}));

const Auth0Login = ({ className, ...rest }) => {
  const classes = useStyles();

  const [error, setError] = useState<string | null>(null);


  const handleLogin = async (): Promise<void> => {

  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {error && (
        <Box my={3}>
          <FormHelperText error>
            {error}
          </FormHelperText>
        </Box>
      )}
      <Box
        display="flex"
        justifyContent="center"
      >
        <Button
          onClick={handleLogin}
          variant="contained"
          color="secondary"
        >
          Log in with Auth0
        </Button>
      </Box>
    </div>
  );
};

Auth0Login.propTypes = {
  className: PropTypes.string
};

export default Auth0Login;
