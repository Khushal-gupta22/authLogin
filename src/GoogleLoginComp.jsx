import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
// import loginButton from "./assets/loginButton.png";
import googleLogin from "./assets/googleLogo.svg";
// import { useNavigate } from "react-router-dom";
import "./GoogleLoginComp.css";

function GoogleLoginComp() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(false);
  // const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <div className="container">
          {/* <img className="" src={loginButton} alt="" onClick={() => login()} /> */}
          <div className="content-wrapper">
            <button className="loginButton" onClick={() => login()}>
              <img src={googleLogin} />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default GoogleLoginComp;
