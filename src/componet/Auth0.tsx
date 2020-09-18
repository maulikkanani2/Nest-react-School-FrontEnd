import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Auth() {
  const [isLoined, setisLoined] = useState(false);
  const [accessToken, setaccessToken] = useState("");

  const responseGoogle = (response) => {
    const { profileObj } = response;
    if (profileObj.email) {
      console.log("profileObj", profileObj);
    } else {
      alert("invalid email");
    }
  };

  const login = (response) => {
    if (response.accessToken) {
      this.setState((state) => ({
        isLogined: true,
        accessToken: response.accessToken,
      }));
    }
  };

  const logout = (response) => {};

  const handleLoginFailure = (response) => {
    console.log("Failed to log in", response);
  };

  const handleLogoutFailure = (response) => {
    alert("Failed to log out");
  };

  return (
    <div>
      {isLoined ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onFailure={() => handleLogoutFailure}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText=" Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={() => handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          responseType="code,token"
        />
      )}
      {accessToken ? (
        <h5>
          Your Access Token: <br />
          <br /> {accessToken}
        </h5>
      ) : null}
    </div>
  );
}

export default Auth;
