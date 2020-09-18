import React, { useState, useEffect } from "react";
import { jwtGet } from "../helpers/jwt";
import Axios from "axios";
import { withRouter } from "react-router-dom";

const Authenticate = (props) => {
  const [state, setstate] = useState({
    user: undefined,
  });

  useEffect(() => {
    const jwt = jwtGet();
    if (!jwt) {
      props.history.push("/login");
    }

    Axios.get(process.env.REACT_APP_NEST_API + "/users/home", {
      headers: { authorization: `Bearer ${jwt}` },
    })
      .then((res) => setstate({ user: res }))
      .catch((err) => {
        localStorage.removeItem("cool-jwt");
        props.history.push("/login");
      });
  }, []);

  if (state.user == undefined) {
    return <h1>Loading....</h1>;
  }

  return <div>{props.children}</div>;
};

export default withRouter(Authenticate);
